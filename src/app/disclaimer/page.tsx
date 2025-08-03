import React from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata = {
  title: '免责声明 - SportStreamHD',
  description: 'SportStreamHD服务条款和免责声明',
}

export default function DisclaimerPage() {
  return (
    <MainLayout>
      <section className="space-section bg-brand-gray-50 min-h-screen">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-responsive-h2 font-bold text-brand-gray-800 mb-4">
              免责声明
            </h1>
            <p className="text-body text-brand-gray-400">
              最后更新时间：2024年1月
            </p>
          </div>

          <div className="space-y-8">
            {/* 服务性质 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">服务性质说明</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-body text-brand-gray-400 leading-relaxed">
                  SportStreamHD（以下简称"我们"或"本公司"）是一家专业的技术服务提供商，
                  <strong className="text-brand-gray-800">仅提供体育赛事直播流的技术传输服务</strong>，
                  包括但不限于RTMP推流、直播链接提供、API接口等技术解决方案。
                </p>
                <p className="text-body text-brand-gray-400 leading-relaxed mt-4">
                  <strong className="text-brand-error">重要声明：我们不拥有、不控制、不提供任何体育赛事内容的版权或授权。</strong>
                  我们的服务范围严格限制在技术层面的流媒体传输服务。
                </p>
              </CardContent>
            </Card>

            {/* 版权责任 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">版权责任说明</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-body text-brand-gray-400">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-brand-gray-800 mb-2">客户责任</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>客户必须确保其使用我们服务传输的所有内容都拥有合法的版权或授权</li>
                      <li>客户需要承担其内容使用的法律责任和版权责任</li>
                      <li>客户应遵守其所在地区的相关法律法规</li>
                      <li>客户不得使用我们的服务传输任何违法或侵权内容</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-brand-gray-800 mb-2">我们的立场</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>我们不对客户传输的内容进行版权审查或合法性验证</li>
                      <li>我们不承担因客户内容使用而产生的任何法律责任</li>
                      <li>我们不参与任何版权纠纷或法律争议</li>
                      <li>我们保留在收到合法通知后暂停或终止服务的权利</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 服务限制 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">服务限制与免责</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-3">技术服务限制</h4>
                    <ul className="list-disc list-inside space-y-2 text-body text-brand-gray-400">
                      <li>网络中断或技术故障可能影响服务质量</li>
                      <li>第三方网络提供商的问题可能导致服务中断</li>
                      <li>不可抗力因素可能影响服务的正常运行</li>
                      <li>定期维护可能导致短暂的服务中断</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-3">免责条款</h4>
                    <ul className="list-disc list-inside space-y-2 text-body text-brand-gray-400">
                      <li>不保证服务100%无中断或无错误</li>
                      <li>不承担因服务中断造成的间接损失</li>
                      <li>不对客户的商业损失承担责任</li>
                      <li>不承担第三方软件或服务的责任</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 合规使用 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">合规使用建议</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-3">建议客户采取的措施</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-brand-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-brand-gray-800 mb-2">版权合规</h5>
                        <p className="text-small text-brand-gray-400">
                          确保获得必要的版权许可，遵守体育联盟和组织的授权要求
                        </p>
                      </div>
                      <div className="bg-brand-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-brand-gray-800 mb-2">法律咨询</h5>
                        <p className="text-small text-brand-gray-400">
                          建议咨询专业的法律顾问，了解当地相关法律法规
                        </p>
                      </div>
                      <div className="bg-brand-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-brand-gray-800 mb-2">内容审查</h5>
                        <p className="text-small text-brand-gray-400">
                          建立内容审查机制，确保传输内容的合法合规性
                        </p>
                      </div>
                      <div className="bg-brand-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-brand-gray-800 mb-2">用户协议</h5>
                        <p className="text-small text-brand-gray-400">
                          制定清晰的用户协议，明确内容使用的责任和限制
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 联系与争议解决 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">联系与争议解决</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-3">联系我们</h4>
                    <div className="space-y-2 text-body text-brand-gray-400">
                      <p>如果您对本免责声明有任何疑问，请联系我们：</p>
                      <div className="bg-brand-gray-50 rounded-lg p-4">
                        <p><strong>邮箱：</strong> legal@sportstreamhd.com</p>
                        <p><strong>邮箱：</strong> business@sportstreamhd.com</p>
                        <p><strong>工作时间：</strong> 周一至周五 9:00-18:00 (GMT+8)</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-3">争议解决</h4>
                    <div className="space-y-2 text-body text-brand-gray-400">
                      <p>任何争议将按照以下方式解决：</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>优先通过友好协商解决</li>
                        <li>协商不成的，提交仲裁解决</li>
                        <li>适用中华人民共和国法律</li>
                        <li>仲裁地点为中国大陆</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 声明更新 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-h3 text-brand-primary">声明更新</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-body text-brand-gray-400 leading-relaxed">
                  我们保留随时更新本免责声明的权利。任何更新将在本页面发布，
                  并在更新生效前通过适当方式通知客户。继续使用我们的服务即表示您接受更新后的免责声明。
                </p>
                <div className="mt-4 p-4 bg-brand-primary/10 rounded-lg">
                  <p className="text-small text-brand-primary">
                    <strong>建议：</strong> 请定期查看本页面以了解最新的免责声明内容。
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}