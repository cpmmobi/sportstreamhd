import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

interface ContactFormData {
  email: string
  contactMethod: string
  sportsInterests: string[]
  integrationType: string
  requirements?: string
}

// 钉钉机器人配置
const DINGTALK_ACCESS_TOKEN = process.env.DINGTALK_ACCESS_TOKEN || 'f7cf0fd1267222a98e223611734a46cc9a705ac8ff8eb9773dcf392aa4fdc0e8'
const DINGTALK_SECRET = process.env.DINGTALK_SECRET || '' // 您需要提供加签密钥

// 生成钉钉机器人签名
function generateDingTalkSign(timestamp: number, secret: string): string {
  const stringToSign = `${timestamp}\n${secret}`
  const hmac = crypto.createHmac('sha256', secret)
  hmac.update(stringToSign, 'utf8')
  const sign = encodeURIComponent(hmac.digest('base64'))
  return sign
}

// 构建钉钉机器人完整URL
function buildDingTalkURL(): { url: string; timestamp: number } {
  const timestamp = Date.now()
  let url = `https://oapi.dingtalk.com/robot/send?access_token=${DINGTALK_ACCESS_TOKEN}`
  
  // 如果配置了加签密钥，则生成签名
  if (DINGTALK_SECRET) {
    const sign = generateDingTalkSign(timestamp, DINGTALK_SECRET)
    url += `&timestamp=${timestamp}&sign=${sign}`
  }
  
  return { url, timestamp }
}

// 发送消息到钉钉群
async function sendToDingTalk(formData: ContactFormData) {
  // 构建体育项目显示文本
  const sportsMap: Record<string, string> = {
    'football': '⚽ 足球',
    'basketball': '🏀 篮球',
    'baseball': '⚾ 棒球',
    'tennis': '🎾 网球',
    'esports': '🎮 电竞',
    'pingpong': '🏓 乒乓球',
    'badminton': '🏸 羽毛球',
    'volleyball': '🏐 排球',
    'cricket': '🏏 板球',
    'snooker': '🎱 斯诺克',
    'racing': '🏎️ 赛车',
    'hockey': '🏒 冰球'
  }
  
  const sportsText = formData.sportsInterests
    .map(sport => sportsMap[sport] || sport)
    .join(', ')

  // 服务类型映射
  const serviceTypeMap: Record<string, string> = {
    'rtmp': '🔴 RTMP推流接入',
    'playback': '📺 直播链接接入',
    'api': '🔌 API接口集成',
    'consultation': '💬 先咨询了解'
  }
  const serviceText = serviceTypeMap[formData.integrationType] || formData.integrationType

  // 判断联系方式类型
  const isQQ = /^\d+$/.test(formData.contactMethod)
  const isTelegram = formData.contactMethod.startsWith('@')
  let contactIcon = '📱'
  if (isQQ) contactIcon = '🐧'
  if (isTelegram) contactIcon = '✈️'

  const message = {
    msgtype: 'markdown',
    markdown: {
      title: '🎯 新客户咨询 - SportStreamHD',
      text: `## 🎯 新客户咨询 - SportStreamHD

**📧 邮箱地址:**  
${formData.email}

**${contactIcon} 联系方式:**  
${formData.contactMethod}

**⚽ 感兴趣的体育项目:**  
${sportsText}

**🔧 服务需求:**  
${serviceText}

**📝 详细需求说明:**  
${formData.requirements || '暂无详细说明'}

---

**⏰ 咨询时间:** ${new Date().toLocaleString('zh-CN', { 
  timeZone: 'Asia/Shanghai',
  year: 'numeric',
  month: '2-digit', 
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})}

> 🚀 **请及时跟进客户需求，建议在4小时内与客户取得联系！**  
> 💡 **提醒：可直接回复邮箱或通过联系方式快速沟通**`
    }
  }

  try {
    const { url: webhookUrl, timestamp } = buildDingTalkURL()
    
    console.log('🔗 钉钉机器人请求URL:', webhookUrl.replace(/access_token=[^&]*/, 'access_token=***'))
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    const result = await response.json()
    
    if (result.errcode === 0) {
      console.log('✅ 钉钉消息发送成功')
      return { success: true, message: '钉钉通知发送成功' }
    } else {
      console.error('❌ 钉钉消息发送失败:', result)
      return { success: false, error: result.errmsg || '发送失败' }
    }
  } catch (error) {
    console.error('🔥 发送钉钉消息时出错:', error)
    return { success: false, error: '网络错误' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json()

    // 验证必填字段
    if (!formData.email || !formData.contactMethod || !formData.sportsInterests?.length || !formData.integrationType) {
      return NextResponse.json(
        { 
          success: false,
          error: '请填写所有必填字段' 
        },
        { status: 400 }
      )
    }

    // 邮箱格式验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { 
          success: false,
          error: '请输入有效的邮箱地址' 
        },
        { status: 400 }
      )
    }

    // 联系方式格式验证
    const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/
    const qqPattern = /^[1-9][0-9]{4,10}$/
    if (!telegramPattern.test(formData.contactMethod) && !qqPattern.test(formData.contactMethod)) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Telegram格式：@username（5-32位字符），QQ格式：5-11位数字' 
        },
        { status: 400 }
      )
    }

    console.log('📝 收到新的客户咨询:', {
      email: formData.email,
      contactMethod: formData.contactMethod,
      sportsCount: formData.sportsInterests.length,
      serviceType: formData.integrationType
    })

    // 发送到钉钉
    const dingResult = await sendToDingTalk(formData)

    if (dingResult.success) {
      return NextResponse.json({ 
        success: true, 
        message: '咨询提交成功！我们的专业团队将在4小时内与您联系，为您提供定制化的解决方案和报价。'
      })
    } else {
      // 即使钉钉发送失败，也返回成功给用户，避免影响用户体验
      // 但在服务端记录错误日志
      console.error('⚠️ 钉钉消息发送失败，但仍返回成功给用户:', dingResult.error)
      return NextResponse.json({ 
        success: true, 
        message: '咨询提交成功！我们的专业团队将在4小时内与您联系，为您提供定制化的解决方案和报价。'
      })
    }
  } catch (error) {
    console.error('💥 处理表单提交时出错:', error)
    return NextResponse.json(
      { 
        success: false,
        error: '服务器暂时繁忙，请稍后重试或直接邮件联系：business@sportstreamhd.com' 
      },
      { status: 500 }
    )
  }
}

// 处理CORS预检请求
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}