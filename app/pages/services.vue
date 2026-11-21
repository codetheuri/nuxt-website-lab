<!-- app/pages/services.vue -->
<script setup lang="ts">
const { siteName } = useSite()

useSeoMeta({
  title: 'Services',
  description: () => `Explore web engineering, UI/UX design, backend APIs, and technical consulting from ${siteName.value}.`,
  ogTitle: () => `Services | ${siteName.value}`,
  ogDescription: () => `Explore web engineering, UI/UX design, backend APIs, and technical consulting from ${siteName.value}.`,
})

interface ServiceItem {
  slug: string
  title: string
  summary: string
  startingFrom: string
  deliverables: string[]
}

const services: ServiceItem[] = [
  {
    slug: 'marketing-websites',
    title: 'Marketing Websites & Landing Pages',
    summary: 'High-speed, SEO-ready websites tailored to explain your offer and convert visitors into leads.',
    startingFrom: 'KSh 65,000',
    deliverables: ['Responsive UI', 'SEO Metadata', 'Fast SSR/Static Delivery'],
  },
  {
    slug: 'web-applications',
    title: 'Custom Web Applications & SaaS',
    summary: 'Interactive dashboards, client portals, and operational tools built for everyday reliability.',
    startingFrom: 'KSh 150,000',
    deliverables: ['Role-Based Flows', 'State Management', 'CSV / Data Workflows'],
  },
  {
    slug: 'apis-and-integrations',
    title: 'APIs, Databases & Integrations',
    summary: 'Clean backend services, relational schemas, and third-party payment or messaging integrations.',
    startingFrom: 'KSh 85,000',
    deliverables: ['REST / Server Endpoints', 'Database Design', 'Webhook Handling'],
  },
]
</script>

<template>
  <div class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Services
          </p>
          <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Solutions tailored to your stage
          </h1>
          <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
            Starter packages below—ready to expand with dynamic Nitro endpoints and detail routes in Milestone 2.
          </p>
        </div>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-500"
        >
          Request a Quote
        </NuxtLink>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.slug"
          class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div>
            <div class="flex items-center justify-between gap-2">
              <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ service.title }}
              </h2>
            </div>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ service.summary }}
            </p>

            <ul class="mt-5 space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
              <li v-for="item in service.deliverables" :key="item" class="flex items-center gap-2">
                <span class="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
            <div>
              <span class="block text-xs text-slate-500 dark:text-slate-400">Starting from</span>
              <span class="text-base font-bold text-slate-900 dark:text-white">{{ service.startingFrom }}</span>
            </div>
            <NuxtLink
              :to="`/contact?service=${service.slug}`"
              class="rounded-lg bg-slate-100 px-3.5 py-2 text-xs font-semibold text-slate-900 transition hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:text-white dark:hover:bg-indigo-600"
            >
              Get Started
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>