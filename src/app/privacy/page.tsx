import React from 'react'
import Link from 'next/link'
import MainLayout from '@/components/layout/main-layout'

export const metadata = {
  title: '隐私政策 - SportStreamHD',
  description: 'SportStreamHD隐私政策，了解我们如何保护您的个人信息和数据安全',
}

export default function PrivacyPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="space-section bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-responsive-h2 font-bold mb-6">隐私政策</h1>
          <p className="text-body-lg max-w-2xl mx-auto leading-relaxed">
            SportStreamHD团队致力于保护您的隐私，本政策详细说明我们的数据处理方式
          </p>
          <p className="text-body text-white/80 mt-4">最后更新：2024年12月</p>
        </div>
      </section>

      {/* 隐私政策内容 */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
          
            {/* 简介 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">1. 简介</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                SportStreamHD团队（以下简称"我们"）致力于保护您的隐私。本隐私政策说明了我们如何收集、使用、存储和保护您在使用我们的体育流媒体服务时提供的信息。
              </p>
            </section>

            {/* 信息收集 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">2. 我们收集的信息</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">2.1 您主动提供的信息</h3>
                  <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                    <li>账户注册信息（用户名、邮箱地址）</li>
                    <li>联系表单提交的信息</li>
                    <li>用户反馈和评论</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">2.2 自动收集的信息</h3>
                  <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                    <li>设备信息（IP地址、浏览器类型、操作系统）</li>
                    <li>使用数据（访问时间、页面浏览、功能使用）</li>
                    <li>Cookies和类似技术收集的数据</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 信息使用 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">3. 我们如何使用您的信息</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed mb-4">
                我们使用收集的信息用于以下目的：
              </p>
              <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                <li>提供和改进我们的体育流媒体服务</li>
                <li>个性化用户体验和内容推荐</li>
                <li>处理用户账户和客户支持请求</li>
                <li>发送服务相关通知和更新</li>
                <li>分析服务使用情况以优化性能</li>
                <li>防止欺诈和滥用行为</li>
              </ul>
            </section>

            {/* 信息共享 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">4. 信息共享</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed mb-4">
                我们不会出售、出租或交易您的个人信息。在以下情况下，我们可能会共享您的信息：
              </p>
              <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                <li>获得您的明确同意</li>
                <li>与我们的服务提供商合作（如云存储、分析服务）</li>
                <li>遵守法律法规要求</li>
                <li>保护我们的权利和用户安全</li>
              </ul>
            </section>

            {/* 数据安全 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">5. 数据安全</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                我们采用行业标准的安全措施来保护您的个人信息，包括加密传输、安全存储和访问控制。我们定期审查和更新安全措施，以应对新的威胁和风险。
              </p>
            </section>

            {/* 用户权利 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">6. 您的权利</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed mb-4">
                根据适用法律，您享有以下权利：
              </p>
              <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                <li>访问和查看您的个人信息</li>
                <li>更正不准确的信息</li>
                <li>删除您的个人信息</li>
                <li>限制或反对处理您的信息</li>
                <li>数据可携带性</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">7. Cookies和跟踪技术</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed mb-4">
                我们使用Cookies和类似技术来：
              </p>
              <ul className="list-disc list-inside text-body text-brand-gray-400 space-y-2 ml-4">
                <li>记住您的偏好设置</li>
                <li>分析网站使用情况</li>
                <li>提供个性化内容</li>
                <li>改善用户体验</li>
              </ul>
              <p className="text-body text-brand-gray-400 leading-relaxed mt-4">
                您可以通过浏览器设置管理Cookies偏好，但请注意，禁用某些Cookies可能会影响服务功能。
              </p>
            </section>

            {/* 第三方服务 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">8. 第三方服务</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                我们的服务可能包含第三方链接或集成第三方服务（如支付处理器、分析工具）。这些第三方服务有自己的隐私政策，我们不对其隐私实践负责。我们建议您在使用这些服务前查看其隐私政策。
              </p>
            </section>

            {/* 儿童隐私 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">9. 儿童隐私</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                我们的服务不面向13岁以下的儿童。我们不会故意收集13岁以下儿童的个人信息。如果您认为我们可能收集了儿童的个人信息，请立即联系我们。
              </p>
            </section>

            {/* 国际传输 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">10. 国际数据传输</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                您的信息可能会被传输到您所在国家/地区以外的服务器进行处理。我们将确保这些传输符合适用的数据保护法律，并采取适当的安全措施保护您的信息。
              </p>
            </section>

            {/* 政策更新 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">11. 隐私政策更新</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed">
                我们可能会不时更新本隐私政策。重大变更时，我们会在网站上发布通知，并在政策顶部更新"最后更新"日期。我们建议您定期查看本政策以了解我们如何处理您的信息。
              </p>
            </section>

            {/* 联系我们 */}
            <section>
              <h2 className="text-h3 font-bold text-brand-gray-800 mb-6">12. 联系我们</h2>
              <p className="text-body text-brand-gray-400 leading-relaxed mb-4">
                如果您对本隐私政策有任何疑问、意见或请求，请通过以下方式联系我们：
              </p>
              <div className="bg-brand-gray-50 rounded-lg p-6">
                <p className="text-body text-brand-gray-400">
                  <strong className="text-brand-gray-800">SportStreamHD团队</strong><br />
                  邮箱：business@sportstreamhd.com<br />
                  网站：<Link href="/contact" className="text-brand-primary hover:text-brand-secondary underline">联系我们页面</Link>
                </p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </MainLayout>
  )
}