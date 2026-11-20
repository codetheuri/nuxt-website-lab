<!-- app/pages/index.vue -->
<script setup lang="ts">
import { siteConfig } from '~/config/site'

useSeoMeta({
  title: 'Home',
  description: siteConfig.brand.description,
  ogTitle: `${siteConfig.brand.name} — ${siteConfig.brand.tagline}`,
  ogDescription: siteConfig.brand.description,
})

const features = [
  {
    title: 'Full-Stack Web Engineering',
    description: 'Fast, resilient web apps and SaaS platforms engineered with clean architecture and modern TypeScript.',
    tag: 'Engineering',
  },
  {
    title: 'Conversion-Focused UI/UX',
    description: 'Interfaces crafted for clarity, speed, and intuitive user flows across desktop and mobile viewports.',
    tag: 'Design',
  },
  {
    title: 'API & Backend Architecture',
    description: 'Structured REST and server endpoints, reliable relational databases, and smooth third-party integrations.',
    tag: 'Backend',
  },
  {
    title: 'SEO & Performance Tuning',
    description: 'Server-rendered pages, semantic markup, and Core Web Vitals optimization built for organic discovery.',
    tag: 'Growth',
  },
  {
    title: 'Cloud & Deployment Pipelines',
    description: 'Repeatable builds, environment-driven configs, and dependable hosting setups that scale smoothly.',
    tag: 'Infrastructure',
  },
  {
    title: 'Ongoing Product Iteration',
    description: 'Clear roadmaps, rapid feature delivery, and practical technical support after launch.',
    tag: 'Partnership',
  },
]

const stats = [
  { label: 'Projects Shipped', value: '45+' },
  { label: 'Client Retention', value: '96%' },
  { label: 'Avg. Lighthouse Score', value: '98/100' },
  { label: 'Response Turnaround', value: '< 24h' },
]

const testimonials = [
  {
    quote:
      'They turned a clunky manual workflow into a fast, reliable web platform our team actually enjoys using every day.',
    author: 'David Mwangi',
    role: 'Operations Lead, Coastline Properties',
  },
  {
    quote:
      'Clean code, zero fluff, and every milestone landed on schedule. Our organic leads jumped within weeks of launch.',
    author: 'Amina Hassan',
    role: 'Founder, Kilindini Studio',
  },
  {
    quote:
      'Having one cohesive engineering partner handle both frontend polish and backend reliability saved us months of friction.',
    author: 'Samuel Otieno',
    role: 'Product Manager, RiftPay Systems',
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden border-b border-slate-200/70 py-20 sm:py-28 dark:border-slate-800/70">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <span
            class="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-800/70 dark:bg-indigo-950/60 dark:text-indigo-300"
          >
            {{ siteConfig.brand.name }} · {{ siteConfig.contact.address }}
          </span>

          <h1 class="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {{ siteConfig.brand.tagline }}
          </h1>

          <p class="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300">
            {{ siteConfig.brand.description }}
          </p>

          <div class="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="w-full rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:w-auto"
            >
              Start a Project
            </NuxtLink>
            <NuxtLink
              to="/services"
              class="w-full rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Explore Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services & Capabilities Grid -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            What We Do
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Everything needed to launch and scale
          </h2>
          <p class="mt-3 text-base text-slate-600 dark:text-slate-400">
            Practical engineering and sharp design focused on real business outcomes rather than bloated over-engineering.
          </p>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="item in features"
            :key="item.title"
            class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition hover:border-indigo-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-indigo-700"
          >
            <div>
              <span
                class="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {{ item.tag }}
              </span>
              <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                {{ item.title }}
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {{ item.description }}
              </p>
            </div>
            <div class="mt-6">
              <NuxtLink
                to="/services"
                class="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
              >
                Learn more &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Key Stats & Trust Strip -->
    <section class="border-y border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-3xl font-extrabold tracking-tight text-indigo-600 sm:text-4xl dark:text-indigo-400">
              {{ stat.value }}
            </p>
            <p class="mt-1.5 text-sm font-medium text-slate-600 dark:text-slate-400">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
            Client Feedback
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Trusted by teams building on the web
          </h2>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <blockquote
            v-for="t in testimonials"
            :key="t.author"
            class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p class="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              &ldquo;{{ t.quote }}&rdquo;
            </p>
            <footer class="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
              <div class="text-sm font-semibold text-slate-900 dark:text-white">{{ t.author }}</div>
              <div class="text-xs text-slate-500 dark:text-slate-400">{{ t.role }}</div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Bottom CTA Banner -->
    <section class="pb-20 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-indigo-600 px-8 py-12 text-white shadow-sm lg:flex-row lg:items-center lg:px-12"
        >
          <div class="max-w-2xl">
            <h2 class="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to ship something sharp and dependable?
            </h2>
            <p class="mt-2 text-sm text-indigo-100 sm:text-base">
              Tell us what you are building and get a clear scope, timeline, and next steps.
            </p>
          </div>
          <NuxtLink
            to="/contact"
            class="shrink-0 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-indigo-600 shadow-xs transition hover:bg-indigo-50"
          >
            Book a Discovery Call
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>