import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

// 简化表单数据结构
interface SimpleContactFormData {
  email: string
  contactMethod: string
  sportsInterests: string[]
  integrationType: string
  requirements?: string
}

// 多步骤表单数据结构  
interface MultiStepFormData {
  formType: 'multi_step'
  // 第一步：基本信息
  companyName: string
  contactName: string
  position: string
  email: string
  phone: string
  // 第二步：业务需求
  sportsInterests: string[]
  integrationType: string
  targetAudience: string
  concurrentViewers: string
  existingProductUrl?: string
  // 第三步：技术信息
  techStack: string
  needApi: boolean
  launchTimeline: string
  specialRequirements?: string
  // 第四步：商务需求
  budgetRange: string
  cooperationModel: string
  otherRequirements?: string
}

type ContactFormData = SimpleContactFormData | MultiStepFormData

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

  let message
  
  // 检查是否为多步骤表单
  if ('formType' in formData && formData.formType === 'multi_step') {
    // 多步骤表单的详细消息格式
    const viewerRangeMap: Record<string, string> = {
      '1-1000': '1-1,000人',
      '1000-10000': '1,000-10,000人', 
      '10000-100000': '10,000-100,000人',
      '100000+': '100,000人以上'
    }
    
    const budgetRangeMap: Record<string, string> = {
      '1000-5000': '$1,000-$5,000/月',
      '5000-15000': '$5,000-$15,000/月',
      '15000-50000': '$15,000-$50,000/月',
      '50000+': '$50,000以上/月'
    }
    
    const cooperationMap: Record<string, string> = {
      'monthly': '按月订阅',
      'quarterly': '按季度订阅', 
      'yearly': '按年订阅',
      'custom': '定制化合作'
    }

    message = {
      msgtype: 'markdown',
      markdown: {
        title: '🎯 高价值客户咨询 - SportStreamHD',
        text: `## 🎯 高价值客户咨询 - SportStreamHD

### 📋 基本信息
**🏢 公司名称:** ${formData.companyName}  
**👤 联系人:** ${formData.contactName} (${formData.position})  
**📧 邮箱地址:** ${formData.email}  
**📱 联系电话:** ${formData.phone}

### 💼 业务需求
**⚽ 感兴趣的体育项目:** ${sportsText}  
**🔧 服务需求:** ${serviceText}  
**👥 目标用户群体:** ${formData.targetAudience}  
**👀 并发观看人数:** ${viewerRangeMap[formData.concurrentViewers] || formData.concurrentViewers}  
${formData.existingProductUrl ? `**🌐 现有产品链接:** ${formData.existingProductUrl}` : ''}

### ⚙️ 技术信息
**💻 技术栈:** ${formData.techStack}  
**🔌 需要API接口:** ${formData.needApi ? '✅ 是' : '❌ 否'}  
**📅 预计上线时间:** ${formData.launchTimeline}  
${formData.specialRequirements ? `**📝 特殊需求:** ${formData.specialRequirements}` : ''}

### 💰 商务信息
**💳 预算范围:** ${budgetRangeMap[formData.budgetRange] || formData.budgetRange}  
**🤝 合作模式:** ${cooperationMap[formData.cooperationModel] || formData.cooperationModel}  
${formData.otherRequirements ? `**📋 其他需求:** ${formData.otherRequirements}` : ''}

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

> 🚨 **高价值客户！请优先处理，建议在2小时内与客户取得联系！**  
> 💡 **提醒：详细的需求信息，适合进行深度商务沟通**`
      }
    }
  } else {
    // 简化表单的消息格式
    const simpleData = formData as SimpleContactFormData
    
    // 判断联系方式类型
    const isQQ = /^\d+$/.test(simpleData.contactMethod)
    const isTelegram = simpleData.contactMethod.startsWith('@')
    let contactIcon = '📱'
    if (isQQ) contactIcon = '🐧'
    if (isTelegram) contactIcon = '✈️'

    message = {
      msgtype: 'markdown',
      markdown: {
        title: '🎯 新客户咨询 - SportStreamHD',
        text: `## 🎯 新客户咨询 - SportStreamHD

**📧 邮箱地址:**  
${simpleData.email}

**${contactIcon} 联系方式:**  
${simpleData.contactMethod}

**⚽ 感兴趣的体育项目:**  
${sportsText}

**🔧 服务需求:**  
${serviceText}

**📝 详细需求说明:**  
${simpleData.requirements || '暂无详细说明'}

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

    // 检查表单类型并进行相应验证
    if ('formType' in formData && formData.formType === 'multi_step') {
      // 多步骤表单验证
      const multiStepData = formData as MultiStepFormData
      
      // 验证必填字段
      if (!multiStepData.companyName || !multiStepData.contactName || !multiStepData.position || 
          !multiStepData.email || !multiStepData.phone || !multiStepData.sportsInterests?.length || 
          !multiStepData.integrationType || !multiStepData.targetAudience || !multiStepData.concurrentViewers ||
          !multiStepData.techStack || !multiStepData.launchTimeline || !multiStepData.budgetRange || 
          !multiStepData.cooperationModel) {
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
      if (!emailRegex.test(multiStepData.email)) {
        return NextResponse.json(
          { 
            success: false,
            error: '请输入有效的邮箱地址' 
          },
          { status: 400 }
        )
      }

      console.log('📝 收到高价值客户咨询:', {
        company: multiStepData.companyName,
        contact: multiStepData.contactName,
        email: multiStepData.email,
        phone: multiStepData.phone,
        sportsCount: multiStepData.sportsInterests.length,
        serviceType: multiStepData.integrationType,
        budget: multiStepData.budgetRange
      })
    } else {
      // 简化表单验证
      const simpleData = formData as SimpleContactFormData
      
      // 验证必填字段
      if (!simpleData.email || !simpleData.contactMethod || !simpleData.sportsInterests?.length || !simpleData.integrationType) {
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
      if (!emailRegex.test(simpleData.email)) {
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
      if (!telegramPattern.test(simpleData.contactMethod) && !qqPattern.test(simpleData.contactMethod)) {
        return NextResponse.json(
          { 
            success: false,
            error: 'Telegram格式：@username（5-32位字符），QQ格式：5-11位数字' 
          },
          { status: 400 }
        )
      }

      console.log('📝 收到新的客户咨询:', {
        email: simpleData.email,
        contactMethod: simpleData.contactMethod,
        sportsCount: simpleData.sportsInterests.length,
        serviceType: simpleData.integrationType
      })
    }

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