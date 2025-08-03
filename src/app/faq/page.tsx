'use client'

import React, { useState } from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { MessageCircle, Settings, Code, CreditCard, Users } from 'lucide-react'
import Link from 'next/link'

// 模拟FAQ数据 - 实际项目中这将从CMS获取
const faqCategories = [
  {
    id: 'general',
    name: '基础服务',
    description: '了解我们的基本服务内容和特点',
    icon: MessageCircle,
    itemCount: 3,
  },
  {
    id: 'technical',
    name: '技术集成',
    description: 'API接口、RTMP推流等技术相关问题',
    icon: Code,
    itemCount: 3,
  },
  {
    id: 'pricing',
    name: '价格计费',
    description: '服务定价、付款方式、发票等相关问题',
    icon: CreditCard,
    itemCount: 2,
  },
  {
    id: 'support',
    name: '客户支持',
    description: '服务支持、故障处理、联系方式',
    icon: Users,
    itemCount: 1,
  },
]

const faqItems = [
  // 基础服务
  {
    id: 1,
    question: '你们提供哪些类型的体育直播流服务？',
    answer: '我们提供两种主要的技术服务形式：\n\n1. **RTMP推流服务**：客户提供推流域名，我们向您的服务器推送直播流，同时提供API接口查询比赛与视频流的对应关系。\n\n2. **直播链接服务**：我们提供可直接播放的直播链接（HLS/DASH格式），您可以直接在您的播放器中使用，同样提供API接口查询比赛信息。\n\n我们覆盖12种体育项目：足球⚽、篮球🏀、棒球⚾、网球🎾、电竞🎮、乒乓球🏓、羽毛球🏸、排球🏐、板球🏏、斯诺克🎱、赛车🏎️、冰球🏒。',
    category: 'general',
    tags: ['服务类型', '体育项目', 'RTMP', '直播链接'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 2,
    question: '你们的服务覆盖哪些地区？',
    answer: '我们的服务实现全球可播，通过遍布全球的直播中心，能够覆盖全球主要地区的体育赛事。目前我们的联赛覆盖度达到89.5%，包括：\n\n- **欧洲**：英超、西甲、德甲、意甲、法甲等主要联赛\n- **亚洲**：中超、J联赛、K联赛等\n- **美洲**：NBA、NFL、MLB、MLS等\n- **其他地区**：澳超、南美解放者杯等\n\n我们的技术团队7×24小时监控服务质量，确保全球用户都能获得稳定的观看体验。',
    category: 'general',
    tags: ['覆盖地区', '全球服务', '联赛'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 3,
    question: '你们提供版权授权吗？',
    answer: '**我们仅提供技术流媒体服务，不涉及版权授权。**\n\n我们的角色是技术服务商，专注于提供稳定、高质量的视频流技术解决方案。关于体育赛事的版权授权，客户需要：\n\n1. 自行获得相关体育赛事的播放权限\n2. 确保在其使用地区拥有合法的播放授权\n3. 承担内容播放的法律责任\n\n我们建议客户在使用我们的服务前，先确认已获得相应的版权授权，以避免任何法律风险。',
    category: 'general',
    tags: ['版权', '法律责任', '授权'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },

  // 技术集成
  {
    id: 4,
    question: '如何开始技术集成？',
    answer: '我们的集成流程简单高效，通常只需要4个步骤：\n\n**1. 需求沟通（1天）**\n- 了解您的业务需求和技术要求\n- 确定服务形式（RTMP推流 或 直播链接）\n- 制定技术方案\n\n**2. 试用演示（即时）**\n- 提供测试环境和演示账号\n- 展示API接口和服务质量\n- 解答技术疑问\n\n**3. 报价提供（1-2天）**\n- 根据需求量身定制报价\n- 提供详细的服务条款\n- 确定合作细节\n\n**4. 接口对接（1-2天）**\n- 提供正式API密钥和文档\n- 协助完成技术集成\n- 确保服务正常运行\n\n[立即开始试用](/contact)',
    category: 'technical',
    tags: ['集成流程', '技术对接', '试用'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 5,
    question: '如何获得API接口文档？',
    answer: '我们为客户提供详细的API接口文档：\n\n**获取方式：**\n1. 填写联系表单，留下您的联系资料\n2. 我们的客户支持会在4小时内与您联系\n3. 根据您的需求提供相应的接口文档\n4. 安排技术演示和答疑\n\n**文档内容包括：**\n- 完整的API接口说明\n- 请求参数和响应格式\n- 代码示例和最佳实践\n- 错误处理机制\n- 认证和安全说明\n\n**技术支持：**\n- 专业技术团队解答集成问题\n- 提供测试环境和演示\n- 协助完成技术对接\n\n[获取API文档](/contact)',
    category: 'technical',
    tags: ['API文档', '技术支持', '联系方式'],
    featured: false,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 6,
    question: 'RTMP推流的具体流程是怎样的？',
    answer: 'RTMP推流服务的具体流程：\n\n**准备阶段：**\n1. 客户提供RTMP推流域名\n2. 我们配置推流参数和密钥\n3. 进行连接测试\n\n**推流过程：**\n1. 我们的系统获取体育赛事源\n2. 实时推送到客户的RTMP服务器\n3. 客户可以立即进行分发和播放\n\n**监控与维护：**\n- 7×24小时监控推流状态\n- 自动处理断线重连\n- 实时质量监控和报警\n- 提供推流日志和统计数据\n\n**技术参数：**\n- 支持1080p高清推流\n- 延迟控制在3-8秒\n- 支持多路并发推流\n- 兼容主流CDN服务商',
    category: 'technical',
    tags: ['RTMP', '推流流程', '技术参数'],
    featured: false,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },

  // 价格计费
  {
    id: 7,
    question: '服务如何计费？',
    answer: '我们采用灵活的订阅制计费模式：\n\n**计费方式：**\n- 按月订阅\n- 按季度订阅（享受优惠）\n- 按年订阅（享受更大优惠）\n\n**计费因素：**\n1. **并发流数量**：同时观看的流数量\n2. **体育项目类型**：不同体育项目价格略有差异\n3. **服务形式**：RTMP推流和直播链接价格不同\n4. **技术支持级别**：标准支持或VIP支持\n\n**付款方式：**\n- 支持BTC、ETH、USDT、USDC等主流加密货币\n- 保护商业隐私，交易更安全\n\n**定价透明：**\n- 无隐藏费用\n- 可按需扩容\n- 提供详细使用报告\n\n[获取专属报价](/contact)',
    category: 'pricing',
    tags: ['计费方式', '订阅', '加密货币'],
    featured: false,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
  {
    id: 8,
    question: '是否提供免费试用？',
    answer: '是的，我们为所有新客户提供免费试用：\n\n**试用内容：**\n- 3天免费试用期\n- 最多3个并发流\n- 包含API接口使用\n- 完整技术支持\n\n**试用流程：**\n1. 填写试用申请表单\n2. 我们在24小时内开通试用账号\n3. 提供测试API密钥和文档\n4. 安排技术演示和支持\n\n**试用限制：**\n- 仅限新客户申请\n- 每个公司限申请一次\n- 试用期间不支持商业用途\n\n**转正优惠：**\n试用期结束后正式签约，可享受首月8折优惠。\n\n[立即申请试用](/contact)',
    category: 'pricing',
    tags: ['免费试用', '试用流程', '新客户'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },

  // 客户支持
  {
    id: 10,
    question: '如何联系客户支持？',
    answer: '我们提供专业的客户支持服务：\n\n**商务咨询：**\n- 邮箱：customer@sportstreamhd.com\n- 工作时间：周一至周五 9:00-18:00 (GMT+8)\n- 响应时间：4小时内回复\n\n**付费客户专享服务：**\n- Telegram群聊全年在线服务\n- 专属客户经理一对一支持\n- 技术支持团队实时响应\n- 7×24小时服务保障\n\n**服务内容：**\n- 技术集成指导\n- 故障问题处理\n- 产品使用培训\n- 定制化解决方案\n\n**联系流程：**\n1. 发送邮件到customer@sportstreamhd.com\n2. 或填写在线联系表单\n3. 我们将在4小时内回复\n4. 付费客户将被邀请加入Telegram群聊\n\n[立即联系我们](/contact)',
    category: 'support',
    tags: ['客户支持', '联系方式', 'Telegram群聊'],
    featured: false,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // 过滤FAQ项目
  const filteredFAQs = faqItems.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    return matchesCategory
  })

  const featuredFAQs = filteredFAQs.filter(faq => faq.featured)

  return (
    <MainLayout>
      <div className="space-section bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-responsive-h1 font-bold text-brand-gray-800 mb-6">
              常见问题
            </h1>
            <p className="text-body-lg text-brand-gray-400 max-w-3xl mx-auto mb-8">
              快速找到您需要的答案。我们整理了客户最关心的问题，涵盖服务介绍、技术集成、价格计费等各个方面。
              如果您没有找到答案，请随时联系我们的客户支持团队。
            </p>


          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-h2 font-bold text-brand-gray-800 mb-8 text-center">问题分类</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              <Card 
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedCategory === 'all' ? 'ring-2 ring-brand-primary bg-brand-primary/5' : ''
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                <CardContent className="p-4 text-center">
                  <Settings className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                  <h3 className="font-semibold text-brand-gray-800 mb-1">全部问题</h3>
                  <p className="text-small text-brand-gray-400">9个问题</p>
                </CardContent>
              </Card>
              
              {faqCategories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedCategory === category.id ? 'ring-2 ring-brand-primary bg-brand-primary/5' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <IconComponent className="h-8 w-8 mx-auto mb-2 text-brand-primary" />
                      <h3 className="font-semibold text-brand-gray-800 mb-1">{category.name}</h3>
                      <p className="text-small text-brand-gray-400">{category.itemCount}个问题</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Featured FAQs */}
          {featuredFAQs.length > 0 && selectedCategory === 'all' && (
            <div className="mb-16">
              <h2 className="text-h2 font-bold text-brand-gray-800 mb-8">热门问题</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {featuredFAQs.slice(0, 4).map((faq) => (
                  <Card key={faq.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                          Q
                        </div>
                        <h3 className="font-semibold text-brand-gray-800 flex-1">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="ml-9">
                        <p className="text-brand-gray-600 text-small line-clamp-3 mb-3">
                          {faq.answer.split('\n')[0]}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {faq.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-brand-gray-100 text-brand-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* FAQ List */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-h2 font-bold text-brand-gray-800">
                {selectedCategory === 'all' ? '全部问题' : 
                 faqCategories.find(cat => cat.id === selectedCategory)?.name || '问题列表'}
              </h2>
              <span className="text-brand-gray-400">
                找到 {filteredFAQs.length} 个问题
              </span>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {filteredFAQs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id.toString()} className="border border-brand-gray-200 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-brand-gray-50 rounded-lg">
                      <div className="flex items-start gap-3 text-left">
                        <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-xs font-bold mt-1 flex-shrink-0">
                          Q
                        </div>
                        <span className="font-semibold text-brand-gray-800">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <div className="ml-9 space-y-4">
                        <div className="prose prose-sm max-w-none text-brand-gray-600">
                          {faq.answer.split('\n').map((line, index) => {
                            if (line.startsWith('**') && line.endsWith('**')) {
                              return (
                                <h4 key={index} className="font-semibold text-brand-gray-800 mt-4 mb-2">
                                  {line.replace(/\*\*/g, '')}
                                </h4>
                              )
                            }
                            if (line.startsWith('```') || line.endsWith('```')) {
                              return null
                            }
                            if (line.trim().startsWith('{') || line.trim().startsWith('"') || line.trim() === '') {
                              return <pre key={index} className="bg-brand-gray-50 p-2 rounded text-xs font-mono">{line}</pre>
                            }
                            if (line.startsWith('- ') || line.startsWith('1. ') || line.match(/^\d+\./)) {
                              return <p key={index} className="mb-1">{line}</p>
                            }
                            return <p key={index} className="mb-2">{line}</p>
                          })}
                        </div>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-gray-100">
                          {faq.tags.map((tag) => (
                            <span key={tag} className="bg-brand-gray-100 text-brand-gray-600 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
              <CardContent className="p-8">
                <h3 className="text-h3 font-bold mb-4">没有找到您要的答案？</h3>
                <p className="text-body-lg mb-6 opacity-90">
                  我们的专业团队随时为您提供支持，欢迎联系我们获取更详细的解答
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href="/contact">
                    <Button variant="secondary" size="lg">
                      联系客户支持
                    </Button>
                  </Link>
                  <div className="flex items-center gap-4 text-small opacity-90">
                    <span>📧 business@sportstreamhd.com</span>
                    <span>🕒 工作时间：9:00-18:00 (GMT+8)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}