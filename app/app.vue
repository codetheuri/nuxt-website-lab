<!-- app/app.vue -->
<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = useRuntimeConfig()
const brandName = computed<string>(() => String(config.public.siteName || siteConfig.brand.name))

useHead({
  titleTemplate: (titleChunk?: string): string => {
    return titleChunk ? `${titleChunk} | ${brandName.value}` : brandName.value
  },
  script: [
    {
      // Runs synchronously before hydration to apply saved/system theme with zero FOUC
      innerHTML: `
        (function() {
          try {
            const saved = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (saved === 'dark' || (!saved && prefersDark)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (e) {}
        })();
      `,
      type: 'text/javascript',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>