'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Globe, Zap, Shield } from 'lucide-react'
import { trackButtonClick } from '@/lib/analytics'

const features = [
  {
    icon: Globe,
    title: '全球可播',
    description: '遍布全球的直播中心'
  },
  {
    icon: Zap,
    title: '低延迟',
    description: '专业技术保障，确保直播流的低延迟传输'
  },
  {
    icon: Shield,
    title: '稳定可靠',
    description: '专业技术保障，高质量直播流服务'
  }
]

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-dots"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-6 animate-fade-in">
            <div className="space-y-3">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-small font-medium">
                <span className="w-2 h-2 bg-brand-success rounded-full mr-2 animate-pulse"></span>
                🌍 专业体育直播流技术服务商
              </div>
              
              <h1 className="text-responsive-hero font-bold leading-tight">
                为体育类产品开发者提供
                <span className="block text-brand-light">稳定的全球赛事直播流</span>
              </h1>
              
              <p className="text-body-lg text-white/90 max-w-xl">
                支持RTMP推流、直播链接、API接口等多种服务形式，覆盖足球、篮球、赛车、冰球等12种体育项目。
                <span className="block mt-2 font-medium">仅提供技术流媒体服务，不涉及版权授权</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" size="lg" asChild className="group">
                <Link 
                  href="/contact"
                  onClick={() => trackButtonClick('获取试用和报价', 'hero')}
                >
                  获取试用和报价
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              

            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4 animate-slide-up">
            {/* API Demo */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <h3 className="text-h4 font-semibold text-white mb-4">API接口示例</h3>
              <div className="bg-black/30 rounded-lg p-4 font-mono text-small">
                <div className="text-brand-light">GET /api/matches</div>
                <div className="text-white/60 mt-2">
                  {`{
  "matches": [
    {
      "match_id": "12345",
      "sport": "football",
      "league": "Premier League",
      "status": "live",
      "stream_urls": {
        "rtmp": "rtmp://stream.sportstreamhd.com/...",
        "hls": "https://stream.sportstreamhd.com/..."
      }
    }
  ]
}`}
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 group hover:bg-white/20 transition-all duration-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.title}</h4>
                      <p className="text-small text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}