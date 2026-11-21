<!-- app/error.vue -->
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const route = useRoute()
const site = useSite()

const brandName = site.siteName
const currentYear = new Date().getFullYear()

const statusCode = computed(() => props.error.statusCode || 500)
const isNotFound = computed(() => statusCode.value === 404)

const pageTitleChunk = computed(() => {
  return isNotFound.value ? `${statusCode.value} - Page Not Found` : `${statusCode.value} - Error`
})

const heading = computed(() => {
  if (isNotFound.value) return 'Page not found'
  return `Error ${statusCode.value}`
})

const description = computed(() => {
  if (isNotFound.value) {
    return "That route isn't here or may have been moved. Jump back home, check out our services, or reach out."
  }
  return props.error.statusMessage || props.error.message || 'An unexpected error occurred while loading this page.'
})

// NuxtError does not expose a top-level `url` property; resolve from `error.data.url` or `route.fullPath`
const requestedPath = computed<string>(() => {
  const data = props.error.data as { url?: string } | undefined
  return data?.url || route.fullPath || ''
})

useSeoMeta({
  title: pageTitleChunk,
  description,
})

function navigateAndClear(redirectTo: string) {
  return clearError({ redirect: redirectTo })
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <!-- Minimal Branded Top Bar -->
    <header
      class="border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          class="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white"
          @click="navigateAndClear('/')"
        >
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-extrabold text-white shadow-sm"
          >
            {{ brandName.charAt(0) }}
          </span>
          <span class="text-lg">{{ brandName }}</span>
        </button>

        <button
          type="button"
          class="rounded-lg border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
          @click="navigateAndClear('/contact')"
        >
          Contact Support
        </button>
      </div>
    </header>

    <!-- Main Error Content -->
    <main class="flex flex-1 items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <p
          class="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-bold tracking-wider text-indigo-700 uppercase dark:border-indigo-800/70 dark:bg-indigo-950/60 dark:text-indigo-300"
        >
          {{ statusCode }} Error
        </p>

        <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          {{ heading }}
        </h1>

        <p class="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {{ description }}
        </p>

        <p
          v-if="requestedPath && isNotFound"
          class="mt-3 truncate rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-xs text-slate-500 dark:bg-slate-900 dark:text-slate-400"
        >
          {{ requestedPath }}
        </p>

        <div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            class="w-full rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:w-auto"
            @click="navigateAndClear('/')"
          >
            Back to Home
          </button>

          <button
            type="button"
            class="w-full rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            @click="navigateAndClear('/services')"
          >
            View Services
          </button>
        </div>
      </div>
    </main>

    <!-- Minimal Footer -->
    <footer
      class="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400"
    >
      &copy; {{ currentYear }} {{ brandName }}. All rights reserved.
    </footer>
  </div>
</template>