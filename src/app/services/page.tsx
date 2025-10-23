import React from 'react'
import MainLayout from '@/components/layout/main-layout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Globe, 
  Zap, 
  Shield, 
  Clock, 
  Monitor, 
  Smartphone, 
  Code, 
  ArrowRight,
  Play,
  Link as LinkIcon,
  Database,
  CheckCircle
} from 'lucide-react'

export const metadata = {
  title: '服务介绍 - SportStreamHD',
  description: '了解SportStreamHD的专业体育直播流技术服务，包括RTMP推流、直播链接、API接口等多种解决方案',
}

const serviceFeatures = [
  {
    icon: Globe,
    title: '全球可播',
    description: '遍布全球的直播中心',
    details: ['亚洲、欧洲、美洲全覆盖', '多CDN节点部署', '智能路由优化']
  },
  {
    icon: Zap,
    title: '低延迟传输',
    description: '< 2秒的超低延迟保障',
    details: ['专业流媒体技术', '网络优化传输', '实时监控调整']
  },
  {
    icon: Shield,
    title: '稳定可靠',
    description: '高质量技术保障',
    details: ['专业系统监控', '多重备份机制', '故障快速恢复']
  },
  {
    icon: Clock,
    title: '联赛覆盖',
    description: '89.5%全球联赛覆盖度',
    details: ['广泛的联赛资源', '专业技术团队', '持续服务优化']
  }
]

const technicalSpecs = [
  {
    category: '视频格式支持',
    items: ['H.264/AVC', 'H.265/HEVC', 'VP8/VP9', 'AV1']
  },
  {
    category: '流媒体协议',
    items: ['RTMP/RTMPS', 'HLS (m3u8)', 'DASH', 'WebRTC']
  },
  {
    category: '分辨率支持',
    items: ['4K (3840×2160)', '1080p (1920×1080)', '720p (1280×720)', '自适应码率']
  },
  {
    category: '音频格式',
    items: ['AAC', 'MP3', 'Opus', '多语言音轨']
  }
]

const integrationSteps = [
  {
    step: 1,
    title: '需求沟通',
    description: '了解您的具体业务需求和技术要求',
    duration: '1-2天'
  },
  {
    step: 2,
    title: '接口对接',
    description: '提供API文档和技术支持',
    duration: '1-2天'
  },
  {
    step: 3,
    title: '测试验收',
    description: '全面测试确保服务质量',
    duration: '1-2天'
  },
  {
    step: 4,
    title: '正式上线',
    description: '开始提供稳定的直播流服务',
    duration: '即时'
  }
]

const useCases = [
  {
    title: '体育APP直播',
    description: '为体育类移动应用提供实时赛事直播流',
    features: ['多画质选择', '自适应码率', '移动端优化', '用户数据分析'],
    icon: Smartphone
  },
  {
    title: '体育网站集成',
    description: '为体育类网站嵌入高质量直播功能',
    features: ['Web播放器', 'H5兼容', '响应式设计', 'SEO友好'],
    icon: Monitor
  },
  {
    title: '体育主播团队',
    description: '为体育主播团队提供无广告、高清、覆盖全、延迟低的直播源',
    features: ['无广告干扰', '高清画质', '覆盖全面', '延迟低'],
    icon: Database
  },
  {
    title: '电竞平台',
    description: '为电竞赛事提供专业直播技术支持',
    features: ['超低延迟', '高并发支持', '多路信号', '互动功能'],
    icon: Code
  }
]

export default function ServicesPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="space-section bg-gradient-to-br from-brand-secondary to-brand-primary text-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-responsive-h2 font-bold mb-6">
              专业体育直播流技术服务
            </h1>
            <p className="text-body-lg leading-relaxed mb-8">
              提供RTMP推流、直播链接、API接口等多种技术解决方案，
              覆盖足球、篮球、赛车、冰球等12种体育项目，为您的产品提供稳定可靠的直播流技术支持
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  获取试用和报价
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              核心服务优势
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              10年技术积累，为您提供企业级的体育直播流服务
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-light rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-body text-brand-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="text-small text-brand-gray-400 space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="h-3 w-3 text-brand-success" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Three Service Types */}
      <section className="space-section bg-brand-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              三种技术服务形式
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              提供RTMP推流、直播链接和直播源群组机器人三种技术服务，满足不同场景的集成需求
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* RTMP推流服务 */}
            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <ArrowRight className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-h3">RTMP推流服务</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-body text-brand-gray-400 text-center">
                  客户提供推流域名，我们将高质量的体育赛事直播流推送到指定地址。同时提供API接口查询比赛与推流地址的对应关系
                </p>
                
                <div className="bg-brand-gray-800 rounded-lg p-4 font-mono text-small">
                  <div className="text-brand-light">rtmp://your-domain.com/live/stream</div>
                  <div className="text-brand-gray-400 mt-2">← 我们推送到此地址</div>
                  <div className="text-green-400 mt-3">GET /api/matches</div>
                  <div className="text-brand-gray-400 mt-1">→ 查询比赛和推流地址对应</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">适用场景：</h4>
                  <ul className="space-y-2 text-small text-brand-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>自有流媒体服务器</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>需要完全控制播放端</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>大规模分发需求</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>自定义播放器开发</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">技术特点：</h4>
                  <ul className="space-y-1 text-small text-brand-gray-400">
                    <li>• 支持多码率推流</li>
                    <li>• 实时推流状态监控</li>
                    <li>• 断线自动重连</li>
                    <li>• 推流质量分析</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 直播链接服务 */}
            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-accent to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <LinkIcon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-h3">直播链接服务</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-body text-brand-gray-400 text-center">
                  提供可直接播放的直播链接，支持HLS、DASH等多种格式。同时提供API接口查询比赛与直播链接的对应关系
                </p>
                
                <div className="bg-brand-gray-800 rounded-lg p-4 font-mono text-small">
                  <div className="text-brand-light">https://stream.sportstreamhd.com/</div>
                  <div className="text-brand-accent">live/12345.m3u8</div>
                  <div className="text-brand-gray-400 mt-2">← 直接播放链接</div>
                  <div className="text-green-400 mt-3">GET /api/matches</div>
                  <div className="text-brand-gray-400 mt-1">→ 查询比赛和直播链接对应</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">适用场景：</h4>
                  <ul className="space-y-2 text-small text-brand-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>快速集成需求</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>Web端播放器</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>移动端APP集成</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>第三方播放器</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">支持格式：</h4>
                  <ul className="space-y-1 text-small text-brand-gray-400">
                    <li>• HLS (m3u8) - iOS/Web优选</li>
                    <li>• DASH - 自适应码率</li>
                    <li>• RTMP - 传统播放器</li>
                    <li>• WebRTC - 超低延迟</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* 直播源群组机器人服务 */}
            <Card className="group hover:shadow-card-hover transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Database className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-h3">直播源群组机器人</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-body text-brand-gray-400 text-center">
                  24h自助查询卫星直播源，OBS打开即播。简单数字回复即可获取高质量直播源地址
                </p>
                
                <div className="bg-brand-gray-800 rounded-lg p-4 font-mono text-small">
                  <div className="text-brand-light">回复: 666</div>
                  <div className="text-brand-accent">→ 查询比赛列表</div>
                  <div className="text-brand-gray-400 mt-2">← 获取比赛信息</div>
                  <div className="text-green-400 mt-3">回复: 比赛序号</div>
                  <div className="text-brand-gray-400 mt-1">→ 查询卫星源地址</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">适用场景：</h4>
                  <ul className="space-y-2 text-small text-brand-gray-400">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>个人直播需求</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>OBS推流</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>自助查询服务</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-brand-success mt-0.5" />
                      <span>24小时可用</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-brand-gray-800">服务特点：</h4>
                  <ul className="space-y-1 text-small text-brand-gray-400">
                    <li>• 卫星直播源 - 高质量信号</li>
                    <li>• 即时响应 - 秒级查询</li>
                    <li>• 简单操作 - 数字回复</li>
                    <li>• 全天候 - 24小时服务</li>
                  </ul>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              技术规格说明
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              支持主流的视频编码格式和流媒体协议，确保兼容性和质量
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-h4 text-center">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {spec.items.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-brand-success" />
                        <span className="text-body text-brand-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-section bg-brand-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              应用场景
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              我们的服务已经成功应用于各种体育相关的产品和平台
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <useCase.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h4 font-semibold text-brand-gray-800 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-body text-brand-gray-400 mb-4">
                        {useCase.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {useCase.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-brand-success" />
                            <span className="text-small text-brand-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="space-section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              集成流程
            </h2>
            <p className="text-body text-brand-gray-400 max-w-2xl mx-auto">
              专业的技术团队为您提供全程技术支持，确保快速、稳定的集成
            </p>
          </div>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-brand-gray-100 hidden lg:block"></div>
            <div className="absolute top-8 left-0 w-4/5 h-0.5 bg-brand-primary hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrationSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-light rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-h4 font-semibold text-brand-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-brand-gray-400 mb-2">
                    {step.description}
                  </p>
                  <div className="text-small text-brand-primary font-medium">
                    {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="space-section bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-responsive-h3 font-bold mb-4">
            准备开始试用？
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto mb-8">
            我们的专业技术团队已经准备好为您提供定制化的体育直播流解决方案。
            立即联系我们，获取详细的技术方案和集成支持。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact">
                获取试用和报价
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
          </div>
        </div>
      </section>
    </MainLayout>
  )
}