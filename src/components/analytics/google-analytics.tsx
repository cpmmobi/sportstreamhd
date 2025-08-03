'use client'

import { useEffect } from 'react'

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  useEffect(() => {
    // 检查是否在浏览器环境
    if (typeof window === 'undefined') return

    // 如果gtag已经存在，不重复初始化
    if (typeof window.gtag === 'function') return

    // 创建dataLayer
    window.dataLayer = window.dataLayer || []
    
    // 定义gtag函数
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    
    // 挂载到window对象
    window.gtag = gtag

    // 初始化
    gtag('js', new Date())
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })

    console.log('🔍 Google Analytics 已初始化:', GA_MEASUREMENT_ID)
  }, [GA_MEASUREMENT_ID])

  return null
}

// 扩展window对象类型
declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }
}