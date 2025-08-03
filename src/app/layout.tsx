import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import GoogleAnalytics from '@/components/analytics/google-analytics'
import Script from 'next/script'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'SportStreamHD - 专业体育视频直播流媒体服务商',
  description: '为体育类产品开发者提供稳定、多元化的全球体育赛事直播流技术接入服务。支持RTMP推流、直播链接、API接口等多种服务形式，覆盖足球、篮球、赛车、冰球等12种体育项目。',
  keywords: '体育直播流API, RTMP推流服务, 体育视频接口, B端体育直播解决方案',
  authors: [{ name: 'SportStreamHD' }],
  creator: 'SportStreamHD',
  publisher: 'SportStreamHD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sportstreamhd.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SportStreamHD - 专业体育视频直播流媒体服务商',
    description: '10年专业服务经验，来自直播吧、onefootball、SportRadar的资深团队。12项体育全覆盖，89.5%全球联赛覆盖度。',
    url: 'https://sportstreamhd.com',
    siteName: 'SportStreamHD',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SportStreamHD - 专业体育直播流服务商',
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SportStreamHD - 专业体育视频直播流媒体服务商',
    description: '为体育类产品开发者提供稳定的全球体育赛事直播流技术接入服务',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={cn(inter.variable)}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7GFBPM5LLB"
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        {/* Google Analytics 初始化 */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-7GFBPM5LLB" />
        {children}
      </body>
    </html>
  )
}