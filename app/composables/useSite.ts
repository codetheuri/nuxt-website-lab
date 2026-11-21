// app/composables/useSite.ts
import { siteConfig } from '~/config/site'

export function useSite() {
  const config = useRuntimeConfig()

  const siteName = computed<string>(() => {
    const envName = String(config.public.siteName || '').trim()
    return envName || siteConfig.brand.name
  })

  const siteUrl = computed<string>(() => {
    const envUrl = String(config.public.siteUrl || '').trim()
    return envUrl || 'http://localhost:3000'
  })

  return {
    ...siteConfig,
    siteName,
    siteUrl,
  }
}