import React from 'react'
import MainLayout from '@/components/layout/main-layout'
import SimpleContactForm from '@/components/contact/simple-contact-form'
import { Card, CardContent } from '@/components/ui/card'

export const metadata = {
  title: '获取试用和报价 - SportStreamHD',
  description: '联系我们获取个性化的体育直播流技术解决方案和报价',
}

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="space-section bg-brand-gray-50 min-h-screen">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-responsive-h2 font-bold text-brand-gray-800 mb-4">
              获取试用和报价
            </h1>
            <p className="text-body-lg text-brand-gray-400 max-w-3xl mx-auto mb-8">
              我们的专业团队将为您提供技术演示和试用体验。填写简单信息，24小时内即可开始试用。
            </p>
            
            {/* Service Promise */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🚀</div>
                  <h3 className="font-semibold text-brand-gray-800 mb-2">快速试用</h3>
                  <p className="text-small text-brand-gray-400">24小时内开通试用</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold text-brand-gray-800 mb-2">免费演示</h3>
                  <p className="text-small text-brand-gray-400">技术演示和方案定制</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">💡</div>
                  <h3 className="font-semibold text-brand-gray-800 mb-2">专业报价</h3>
                  <p className="text-small text-brand-gray-400">透明报价和灵活套餐</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Form */}
          <SimpleContactForm />

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-h3 font-semibold text-brand-gray-800 mb-4">
                  为什么选择我们？
                </h3>
                <ul className="space-y-3 text-body text-brand-gray-400">
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-success">✓</span>
                    <span>10年专业服务经验，来自直播吧、onefootball、SportRadar的资深团队</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-success">✓</span>
                    <span>12种体育项目全覆盖，RTMP推流+直播链接双重方案</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-success">✓</span>
                    <span>专业技术保障，89.5%全球联赛覆盖度</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-success">✓</span>
                    <span>专业API接口，快速集成缩短开发周期</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-brand-success">✓</span>
                    <span>加密货币友好支付，保护商业隐私安全</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-h3 font-semibold text-brand-gray-800 mb-4">
                  服务流程
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-small font-medium">1</div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-800">需求沟通</h4>
                      <p className="text-small text-brand-gray-400">深入了解您的业务需求和技术要求</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-small font-medium">2</div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-800">试用演示</h4>
                      <p className="text-small text-brand-gray-400">安排技术演示，提供试用体验</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-small font-medium">3</div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-800">报价提供</h4>
                      <p className="text-small text-brand-gray-400">提供详细的服务报价和合作条款</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-small font-medium">4</div>
                    <div>
                      <h4 className="font-semibold text-brand-gray-800">接口对接</h4>
                      <p className="text-small text-brand-gray-400">1-2天快速完成技术集成</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Alternative */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-brand-secondary to-brand-primary rounded-xl p-8 text-white">
              <h3 className="text-h3 font-semibold mb-4">
                需要紧急咨询？
              </h3>
              <p className="text-body-lg mb-6">
                如果您有紧急的技术需求或希望直接沟通，欢迎通过以下方式联系我们
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2">
                  <span>📧</span>
                  <span>business@sportstreamhd.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🕒</span>
                  <span>工作时间：周一至周五 9:00-18:00 (GMT+8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}