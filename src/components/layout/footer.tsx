'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { addUTMToLink } from '@/lib/utm-persistence'

const navigation = {
  main: [
    { name: '服务介绍', href: '/services' },
  
    { name: '关于我们', href: '/about' },
  ],
  resources: [

    { name: '常见问题', href: '/faq' },
    { name: '免责声明', href: '/disclaimer' },
    { name: '隐私政策', href: '/privacy' },
  ],
  support: [
    { name: '联系我们', href: '/contact' },
  ],
}

const sports = [
  '⚽ 足球', '🏀 篮球', '⚾ 棒球', '🎾 网球',
  '🎮 电竞', '🏓 乒乓球', '🏸 羽毛球', '🏐 排球',
  '🏏 板球', '🎱 斯诺克', '🏎️ 赛车', '🏒 冰球'
]

export default function Footer() {
  return (
    <footer className="bg-brand-secondary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-light flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold">
                  Sport<span className="text-brand-light">StreamHD</span>
                </span>
              </Link>
              <p className="text-white/80 text-body mb-6">
                专业体育直播流技术服务商，为体育类产品开发者提供稳定、多元化的全球体育赛事直播流技术接入服务。
              </p>
              <Button variant="accent" asChild>
                <Link href={addUTMToLink('/contact')}>获取试用和报价</Link>
              </Button>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-h4 font-semibold mb-4">核心服务</h3>
              <ul className="space-y-3">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-h4 font-semibold mb-4">资源中心</h3>
              <ul className="space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-h4 font-semibold mb-4">技术支持</h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sports Coverage */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-h4 font-semibold mb-4">支持的体育项目</h3>
            <div className="flex flex-wrap gap-3">
              {sports.map((sport, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 rounded-full text-small text-white/90"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>

          {/* Technical Services */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <h3 className="text-h4 font-semibold mb-4">三种技术服务形式</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">RTMP推流服务</h4>
                <p className="text-white/80 text-small">客户提供推流域名，我们推送直播流，并提供API查询比赛对应关系</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">直播链接服务</h4>
                <p className="text-white/80 text-small">提供可直接播放的直播链接，并提供API查询比赛对应关系</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">直播源群组机器人</h4>
                <p className="text-white/80 text-small mb-3">24h自助查询卫星直播源，OBS打开即播</p>
                <div className="space-y-2">
                  <div className="text-white/90 text-small">
                    <span className="font-medium">回复: 666</span>
                    <br />
                    <span className="text-white/70">查询比赛列表</span>
                  </div>
                  <div className="text-white/90 text-small">
                    <span className="font-medium">回复: 比赛序号</span>
                    <br />
                    <span className="text-white/70">查询卫星源地址</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Team */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="bg-gradient-to-r from-brand-primary/20 to-brand-light/20 rounded-xl p-6">
              <h3 className="text-h3 font-semibold mb-3">专业团队更懂你</h3>
              <p className="text-white/90">
                怀揣着对于体育赛事的热爱，我们团队自2014年以来，已经为亚洲区中文地区服务超过10年。
                我们的团队凝聚了数十位资深的体育赛事从业者，也有不少来自于直播吧、onefootball、SportRadar等工作经验。
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-small">
              © 2024 SportStreamHD. 保留所有权利。
            </div>
            <div className="flex items-center space-x-6 text-small">
              <span className="text-white/80">
                支付方式：BTC、ETH、USDT、USDC等加密货币
              </span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></div>
                <span className="text-white/80">服务状态：正常运行</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}