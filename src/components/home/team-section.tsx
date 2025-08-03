'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Clock, Globe, Award } from 'lucide-react'

const achievements = [
  {
    icon: Clock,
    title: '10年专业服务',
    description: '自2014年以来专注体育技术服务',
    detail: '为亚洲区中文地区持续服务'
  },
  {
    icon: Users,
    title: '资深团队',
    description: '数十位体育赛事从业者',
    detail: '来自知名体育科技公司'
  },
  {
    icon: Globe,
    title: '全球可播',
    description: '遍布全球的直播中心',
    detail: '89.5%全球联赛覆盖度'
  },
  {
    icon: Award,
    title: '技术领先',
    description: '前沿的流媒体技术',
    detail: '低延迟、高清晰度保证'
  }
]

const companies = [
  { name: '直播吧', description: '中国最大的体育资讯平台' },
  { name: 'onefootball', description: '全球领先的足球媒体平台' },
  { name: 'SportRadar', description: '全球体育数据技术公司' }
]

export default function TeamSection() {
  return (
    <section className="space-section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-responsive-h2 font-bold text-brand-gray-800 mb-6">
                专业团队更懂你
              </h2>
              <div className="prose prose-lg text-brand-gray-400">
                <p className="text-body-lg leading-relaxed">
                  怀揣着对于体育赛事的热爱，我们团队自<strong className="text-brand-primary">2014年</strong>以来，
                  已经为亚洲区中文地区服务超过<strong className="text-brand-primary">10年</strong>。
                </p>
                <p className="text-body-lg leading-relaxed mt-4">
                  我们的团队凝聚了<strong className="text-brand-primary">数十位资深的体育赛事从业者</strong>，
                  也有不少来自于<strong className="text-brand-accent">直播吧、onefootball、SportRadar</strong>等知名体育科技公司的工作经验。
                </p>
              </div>
            </div>

            {/* Company Experience */}
            <div className="space-y-4">
              <h3 className="text-h3 font-semibold text-brand-gray-800">
                团队成员来自知名企业
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-brand-gray-50 rounded-lg border-l-4 border-brand-primary"
                  >
                    <div>
                      <h4 className="font-semibold text-brand-gray-800">{company.name}</h4>
                      <p className="text-body text-brand-gray-400">{company.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link href="/contact">
                  联系专业团队
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/about">
                  了解更多
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Achievements */}
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-h4 font-semibold text-brand-gray-800 mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-body text-brand-gray-400 mb-1">
                        {achievement.description}
                      </p>
                      <p className="text-small text-brand-primary font-medium">
                        {achievement.detail}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-brand-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              为什么选择我们
            </h3>
            <p className="text-body text-brand-gray-400">
              专业、稳定、可信赖的体育直播流技术服务商
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">10+</div>
              <div className="text-body text-brand-gray-400">年专业服务经验</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">12</div>
              <div className="text-body text-brand-gray-400">种体育项目覆盖</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">89.5%</div>
              <div className="text-body text-brand-gray-400">全球联赛覆盖度</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary mb-2">专业</div>
              <div className="text-body text-brand-gray-400">技术服务保障</div>
            </div>
          </div>
        </div>

        {/* Service Commitment */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-brand-secondary to-brand-primary text-white">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-responsive-h3 font-bold mb-4">
                我们的服务承诺
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-semibold mb-1">专注B端技术服务</div>
                  <div className="text-white/80 text-small">深度理解企业需求</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-semibold mb-1">快速响应客户需求</div>
                  <div className="text-white/80 text-small">高效的沟通和执行</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🔧</div>
                  <div className="font-semibold mb-1">提供专业技术支持</div>
                  <div className="text-white/80 text-small">全方位技术保障</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-semibold mb-1">覆盖全球体育赛事</div>
                  <div className="text-white/80 text-small">无地域限制的服务</div>
                </div>
              </div>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">
                  立即体验专业服务
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}