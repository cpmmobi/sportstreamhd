import React from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: '关于我们 - SportStreamHD',
  description: '了解SportStreamHD团队，10年专业体育直播流技术服务经验',
}

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="space-section bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
        <div className="container-custom text-center">
          <h1 className="text-responsive-h2 font-bold mb-6">
            专业团队更懂你
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto leading-relaxed">
            怀揣着对于体育赛事的热爱，我们团队自2014年以来，已经为亚洲区中文地区服务超过10年。
            我们的团队凝聚了数十位资深的体育赛事从业者，也有不少来自于直播吧、onefootball、SportRadar等工作经验。
          </p>
        </div>
      </section>

      {/* Team Experience */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-6">
                深耕体育科技10年
              </h2>
              <div className="space-y-4 text-body text-brand-gray-400">
                <p>
                  自2014年成立以来，SportStreamHD始终专注于体育直播流技术服务领域。
                  我们见证了体育科技行业的蓬勃发展，也积累了丰富的技术服务经验。
                </p>
                <p>
                  我们的团队成员来自体育科技行业的各个领域，包括数据分析、流媒体技术、
                  产品开发等，拥有深厚的行业背景和技术实力。
                </p>
                <p>
                  多年来，我们为亚洲区中文地区的众多体育类产品提供了稳定可靠的技术支持，
                  帮助客户实现了业务目标，获得了广泛的认可和信赖。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-brand-primary mb-2">2014</div>
                  <div className="text-body text-brand-gray-400">公司成立年份</div>
                </CardContent>
              </Card>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">10+</div>
                    <div className="text-small text-brand-gray-400">服务年限</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-brand-primary mb-2">50+</div>
                    <div className="text-small text-brand-gray-400">团队成员</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="space-section bg-brand-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              团队成员来自知名企业
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              我们的核心团队成员拥有丰富的体育科技行业经验，来自业内知名企业
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-200">
                  球
                </div>
                <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">球探网</h3>
                <p className="text-body text-brand-gray-400 mb-4">
                  体育数据服务领域的领导者，专注于为体育行业提供全面的数据解决方案
                </p>
                <div className="text-small text-brand-primary">数据技术 • 产品设计</div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-200">
                  懂
                </div>
                <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">懂球帝</h3>
                <p className="text-body text-brand-gray-400 mb-4">
                  中国最大的足球社区平台，拥有千万级用户，深耕体育内容和社区运营
                </p>
                <div className="text-small text-brand-primary">社区运营 • 内容策略</div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold group-hover:scale-110 transition-transform duration-200">
                  SR
                </div>
                <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">SportRadar</h3>
                <p className="text-body text-brand-gray-400 mb-4">
                  全球领先的体育数据技术公司，为全球体育组织提供专业的技术解决方案
                </p>
                <div className="text-small text-brand-primary">技术架构 • 系统开发</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              我们的服务承诺
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              专业、稳定、可信赖的体育直播流技术服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">专注B端技术服务</h3>
              <p className="text-body text-brand-gray-400">
                深度理解企业需求，提供专业的B端技术解决方案
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">快速响应客户需求</h3>
              <p className="text-body text-brand-gray-400">
                24小时快速响应，高效的沟通和执行能力
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">提供专业技术支持</h3>
              <p className="text-body text-brand-gray-400">
                全方位技术保障，专业团队技术支持
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">覆盖全球体育赛事</h3>
              <p className="text-body text-brand-gray-400">
                无地域限制的服务，全球体育赛事直播流支持
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="space-section bg-brand-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-6">
                技术实力与创新
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-small">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">流媒体技术专长</h4>
                    <p className="text-body text-brand-gray-400">
                      深度掌握RTMP、HLS、DASH等主流流媒体协议，确保直播流的稳定传输
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-small">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">全球网络优化</h4>
                    <p className="text-body text-brand-gray-400">
                      构建全球CDN网络，优化直播延迟，提供高质量的观看体验
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-small">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">API设计与开发</h4>
                    <p className="text-body text-brand-gray-400">
                      设计友好的RESTful API，简化客户集成流程，提高开发效率
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-small">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-gray-800 mb-2">系统监控与维护</h4>
                    <p className="text-body text-brand-gray-400">
                      专业系统监控，高质量技术保障，确保服务稳定性
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gradient-to-br from-brand-primary to-brand-light text-white">
                <CardContent className="p-8">
                  <h3 className="text-h3 font-bold mb-6">技术指标</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">89.5%</div>
                      <div className="text-white/80">联赛覆盖度</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">&lt;2s</div>
                      <div className="text-white/80">直播延迟</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">4K</div>
                      <div className="text-white/80">最高画质</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">专业</div>
                      <div className="text-white/80">技术团队</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-section bg-white">
        <div className="container-custom text-center">
          <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
            准备开始合作？
          </h2>
          <p className="text-body-lg text-brand-gray-400 max-w-2xl mx-auto mb-8">
            我们的专业团队已经准备好为您提供定制化的体育直播流技术解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">
                获取试用和报价
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>

            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}