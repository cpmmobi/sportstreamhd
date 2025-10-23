'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { FormField, FormLabel, FormMessage, FormDescription } from '@/components/ui/form'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { trackFormSubmit, trackServiceInterest, trackContactPreference } from '@/lib/analytics'
import { getUserSourceInfo } from '@/lib/user-source-tracker'

// 简化的表单验证Schema - 保护客户隐私，只收集必要信息
const formSchema = z.object({
  email: z.string().email('请输入有效的邮箱地址'),
  contactMethod: z.string()
    .min(1, '请输入Telegram或QQ联系方式')
    .refine((value) => {
      // Telegram格式：@开头的用户名
      const telegramPattern = /^@[a-zA-Z0-9_]{5,32}$/
      // QQ格式：5-11位数字
      const qqPattern = /^[1-9][0-9]{4,10}$/
      return telegramPattern.test(value) || qqPattern.test(value)
    }, {
      message: 'Telegram格式：@username（5-32位字符），QQ格式：5-11位数字'
    }),
  sportsInterests: z.array(z.string()).min(1, '请至少选择一种体育项目'),
  useCase: z.string().min(1, '请选择使用场景'),
  streamerType: z.string().optional(), // 主播规模
  platformInfo: z.string().optional(), // 平台信息
  requirements: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const sportsOptions = [
  { value: 'football', label: '⚽ 足球' },
  { value: 'basketball', label: '🏀 篮球' },
  { value: 'baseball', label: '⚾ 棒球' },
  { value: 'tennis', label: '🎾 网球' },
  { value: 'esports', label: '🎮 电竞' },
  { value: 'pingpong', label: '🏓 乒乓球' },
  { value: 'badminton', label: '🏸 羽毛球' },
  { value: 'volleyball', label: '🏐 排球' },
  { value: 'cricket', label: '🏏 板球' },
  { value: 'snooker', label: '🎱 斯诺克' },
  { value: 'racing', label: '🏎️ 赛车' },
  { value: 'hockey', label: '🏒 冰球' },
]

const integrationOptions = [
  { value: 'website_app', label: '网站/APP接入赛事直播' },
  { value: 'obs_streaming', label: '仅网络主播在OBS直播使用' },
  { value: 'both_scenarios', label: '以上两种场景都有' },
]

const streamerTypeOptions = [
  { value: 'team', label: '主播团体' },
  { value: 'individual', label: '个体主播' },
]

export default function SimpleContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      contactMethod: '',
      sportsInterests: [],
      useCase: '',
      streamerType: '',
      platformInfo: '',
      requirements: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      console.log('提交表单数据:', data)
      
      // 获取用户来源信息
      const userSource = getUserSourceInfo()
      console.log('🔍 前端获取的用户来源信息:', userSource)
      console.log('🔗 当前URL:', window.location.href)
      console.log('📄 Referrer:', document.referrer)
      
      // 调试URL参数解析
      const urlParams = new URLSearchParams(window.location.search);
      console.log('🎯 UTM参数解析:')
      console.log('  utm_source:', urlParams.get('utm_source'))
      console.log('  utm_medium:', urlParams.get('utm_medium'))
      console.log('  utm_campaign:', urlParams.get('utm_campaign'))
      console.log('  utm_term:', urlParams.get('utm_term'))
      
      // 调试语言信息
      console.log('🌐 浏览器语言信息:')
      console.log('  主要语言:', navigator.language)
      console.log('  所有语言:', navigator.languages)
      
      // 调试引荐信息
      if (document.referrer) {
        console.log('🔗 引荐网站信息:')
        console.log('  完整URL:', document.referrer)
        try {
          const referrerUrl = new URL(document.referrer)
          console.log('  域名:', referrerUrl.hostname)
          console.log('  路径:', referrerUrl.pathname)
          console.log('  参数:', referrerUrl.search)
        } catch (e) {
          console.log('  解析失败:', e)
        }
      }
      
      // 追踪表单提交开始
      trackServiceInterest(data.useCase, data.sportsInterests.length)
      trackContactPreference(data.contactMethod)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          userSource
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setIsSubmitted(true)
        console.log('✅ 表单提交成功:', result.message)
        
        // 追踪表单提交成功
        trackFormSubmit('contact_form', true)
      } else {
        console.error('❌ 表单提交失败:', result.error)
        
        // 追踪表单提交失败
        trackFormSubmit('contact_form', false)
        alert(result.error || '提交失败，请稍后重试')
      }
    } catch (error) {
      console.error('💥 提交表单时出错:', error)
      
      // 追踪表单提交错误
      trackFormSubmit('contact_form', false)
      alert('网络错误，请检查网络连接后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-brand-success rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-h2 font-bold text-brand-gray-800 mb-4">
              提交成功！
            </h2>
            <p className="text-body text-brand-gray-400 mb-8">
              感谢您的咨询，我们的专业团队将在24小时内与您联系，为您提供定制化的解决方案和报价。
            </p>
            <div className="bg-brand-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-brand-gray-800 mb-2">接下来会发生什么？</h3>
              <ul className="text-left text-body text-brand-gray-400 space-y-2">
                <li>• 我们的技术顾问将联系您了解详细需求</li>
                <li>• 为您制定专属的技术方案和报价</li>
                <li>• 安排技术演示和试用</li>
                <li>• 提供完整的集成支持</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-h3 text-center">
            获取试用和报价
          </CardTitle>
          
          {/* 隐私保护说明 */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 text-xl">🔒</div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-1">隐私保护承诺</h4>
                <p className="text-small text-blue-600">
                  我们重视您的隐私，仅收集必要的联系信息。您的信息将被严格保密，仅用于提供技术服务。
                </p>
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* 联系信息 */}
            <div className="space-y-4">
              <FormField>
                <FormLabel htmlFor="email">邮箱地址 *</FormLabel>
                <Input
                  id="email"
                  type="email"
                  {...form.register('email')}
                  placeholder="your@company.com"
                />
                {form.formState.errors.email && (
                  <FormMessage>{form.formState.errors.email.message}</FormMessage>
                )}
              </FormField>

              <FormField>
                <FormLabel htmlFor="contactMethod">Telegram 或 QQ *</FormLabel>
                <Input
                  id="contactMethod"
                  {...form.register('contactMethod')}
                  placeholder="@username 或 12345678"
                />
                <FormDescription>
                  Telegram格式：@username（如@alice_dev），QQ格式：数字号码（如12345678）
                </FormDescription>
                {form.formState.errors.contactMethod && (
                  <FormMessage>{form.formState.errors.contactMethod.message}</FormMessage>
                )}
              </FormField>
            </div>

            {/* 业务需求 */}
            <div className="space-y-4">
              <FormField>
                <FormLabel>感兴趣的体育项目 *</FormLabel>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                  {sportsOptions.map((sport) => (
                    <label
                      key={sport.value}
                      className={cn(
                        "flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-colors",
                        form.watch('sportsInterests')?.includes(sport.value)
                          ? "bg-brand-primary/10 border-brand-primary"
                          : "bg-white border-brand-gray-200 hover:border-brand-gray-300"
                      )}
                    >
                      <input
                        type="checkbox"
                        value={sport.value}
                        {...form.register('sportsInterests')}
                        className="sr-only"
                      />
                      <span className="text-small font-medium">{sport.label}</span>
                    </label>
                  ))}
                </div>
                {form.formState.errors.sportsInterests && (
                  <FormMessage>{form.formState.errors.sportsInterests.message}</FormMessage>
                )}
              </FormField>

                            <FormField>
                <FormLabel>使用场景 *</FormLabel>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {integrationOptions.map((option) => (
                    <label
                      key={option.value}
                      className={cn(
                        "flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors",
                        form.watch('useCase') === option.value
                          ? "bg-brand-primary/10 border-brand-primary"
                          : "bg-white border-brand-gray-200 hover:border-brand-gray-300"
                      )}
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...form.register('useCase')}
                        className="sr-only"
                      />
                      <span className="text-small font-medium">{option.label}</span>
                    </label>
                  ))}
                </div>
                {form.formState.errors.useCase && (
                  <FormMessage>{form.formState.errors.useCase.message}</FormMessage>
                )}
              </FormField>

              {/* 关联问题1：主播规模（仅当选择"仅网络主播在OBS直播使用"时显示） */}
              {form.watch('useCase') === 'obs_streaming' && (
                <FormField>
                  <FormLabel>主播规模 *</FormLabel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                    {streamerTypeOptions.map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors",
                          form.watch('streamerType') === option.value
                            ? "bg-brand-primary/10 border-brand-primary"
                            : "bg-white border-brand-gray-200 hover:border-brand-gray-300"
                        )}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...form.register('streamerType')}
                          className="sr-only"
                        />
                        <span className="text-small font-medium">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {/* 主播提示 */}
                  {(form.watch('streamerType') === 'individual' || form.watch('streamerType') === 'team') && (
                    <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-600 text-small">
                        温馨提示：专为主播群体设计的Telegram群组机器人，24h为您提供超清卫星源
                      </p>
                    </div>
                  )}
                </FormField>
              )}



              {/* 关联问题2：平台信息（当选择"网站/APP接入赛事直播"或"以上两种场景都有"时显示） */}
              {(form.watch('useCase') === 'website_app' || form.watch('useCase') === 'both_scenarios') && (
                <FormField>
                  <FormLabel>网站/APP或平台信息（可选）</FormLabel>
                  <Input
                    {...form.register('platformInfo')}
                    placeholder="为了便于后续沟通，请输入您的平台名称"
                    className="mt-2"
                  />
                </FormField>
              )}

              <FormField>
                <FormLabel htmlFor="requirements">详细需求说明（可选）</FormLabel>
                <textarea
                  id="requirements"
                  {...form.register('requirements')}
                  placeholder="请描述您的具体需求、预期流量、技术栈等..."
                  className="w-full p-3 border border-brand-gray-200 rounded-lg resize-none h-24 text-small"
                />
              </FormField>
            </div>

            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? '提交中...' : '获取试用和报价'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}