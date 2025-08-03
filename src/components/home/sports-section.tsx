'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const sports = [
  { name: '足球', icon: '⚽', description: '全球最受欢迎的体育项目', leagues: ['英超', '西甲', '德甲', '意甲'] },
  { name: '篮球', icon: '🏀', description: '包含NBA、CBA等顶级联赛', leagues: ['NBA', 'CBA', '欧洲篮球'] },
  { name: '棒球', icon: '⚾', description: '美国职业大联盟等赛事', leagues: ['MLB', '日职', '韩职'] },
  { name: '网球', icon: '🎾', description: '四大满贯及ATP赛事', leagues: ['温网', '美网', 'ATP'] },
  { name: '电竞', icon: '🎮', description: '热门电竞游戏赛事', leagues: ['LOL', 'DOTA2', 'CS:GO'] },
  { name: '乒乓球', icon: '🏓', description: '国际乒联系列赛事', leagues: ['世乒赛', 'WTT', '奥运'] },
  { name: '羽毛球', icon: '🏸', description: 'BWF世界羽联赛事', leagues: ['世锦赛', '全英赛', '奥运'] },
  { name: '排球', icon: '🏐', description: '国际排联系列赛事', leagues: ['世界杯', '世锦赛', '奥运'] },
  { name: '板球', icon: '🏏', description: '英联邦地区热门运动', leagues: ['IPL', 'T20', '世界杯'] },
  { name: '斯诺克', icon: '🎱', description: '世界职业斯诺克赛事', leagues: ['世锦赛', '大师赛', '英锦赛'] },
  { name: '赛车', icon: '🏎️', description: '国际赛车运动', leagues: ['F1', 'NASCAR', 'WRC'] },
  { name: '冰球', icon: '🏒', description: '职业冰球联赛', leagues: ['NHL', 'KHL', '奥运'] }
]

export default function SportsSection() {
  return (
    <section className="space-section bg-brand-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-responsive-h2 font-bold text-brand-gray-800 mb-4">
            12种体育项目全覆盖
          </h2>
          <p className="text-body-lg text-brand-gray-400 max-w-3xl mx-auto">
            从主流的足球、篮球，到专业的赛车、冰球，我们为各类体育产品提供全方位的直播流技术支持
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <Card key={index} className="group hover:shadow-card-hover transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {sport.icon}
                </div>
                <h3 className="text-h4 font-semibold text-brand-gray-800 mb-2">
                  {sport.name}
                </h3>
                <p className="text-body text-brand-gray-400 mb-4">
                  {sport.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {sport.leagues.map((league, leagueIndex) => (
                    <span
                      key={leagueIndex}
                      className="px-2 py-1 bg-brand-primary/10 text-brand-primary text-small rounded-full"
                    >
                      {league}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Services */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-responsive-h3 font-bold text-brand-gray-800 mb-4">
              两种技术服务形式
            </h3>
            <p className="text-body text-brand-gray-400">
              灵活的接入方式，满足不同客户的技术需求。两种服务都提供API接口查询比赛与视频流的对应关系
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="text-center group hover:border-brand-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-light rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <h4 className="text-h4 font-semibold text-brand-gray-800 mb-4">
                  RTMP推流服务
                </h4>
                <p className="text-body text-brand-gray-400 mb-6">
                  客户提供推流域名，我们将高质量的体育赛事直播流推送到指定地址。同时提供API接口查询比赛与视频流的对应关系
                </p>
                <div className="bg-brand-gray-50 rounded-lg p-4 font-mono text-small text-left">
                  <div className="text-brand-primary">rtmp://your-domain.com/live/</div>
                  <div className="text-brand-gray-400 mt-1">← 我们推送直播流到此地址</div>
                  <div className="text-brand-primary mt-2">GET /api/matches</div>
                  <div className="text-brand-gray-400 mt-1">→ 查询比赛和推流地址对应</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center group hover:border-brand-primary/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-accent to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h4 className="text-h4 font-semibold text-brand-gray-800 mb-4">
                  直播链接服务
                </h4>
                <p className="text-body text-brand-gray-400 mb-6">
                  提供可直接播放的直播链接，支持HLS、DASH等多种格式。同时提供API接口查询比赛与视频流的对应关系
                </p>
                <div className="bg-brand-gray-50 rounded-lg p-4 font-mono text-small text-left">
                  <div className="text-brand-primary">https://stream.sportstreamhd.com/</div>
                  <div className="text-brand-gray-400 mt-1">live/12345.m3u8</div>
                  <div className="text-brand-primary mt-2">GET /api/matches</div>
                  <div className="text-brand-gray-400 mt-1">→ 查询比赛和直播链接对应</div>
                </div>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </section>
  )
}