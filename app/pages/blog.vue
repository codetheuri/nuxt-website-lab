<!-- app/pages/blog.vue -->
<script setup lang="ts">
import { siteConfig } from '~/config/site'

useSeoMeta({
  title: 'Blog',
  description: `Articles, engineering notes, and product insights from ${siteConfig.brand.name}.`,
  ogTitle: `Blog | ${siteConfig.brand.name}`,
  ogDescription: `Articles, engineering notes, and product insights from ${siteConfig.brand.name}.`,
})

interface PostItem {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

const categories = ['All', 'Engineering', 'Product', 'Performance']
const selectedCategory = ref('All')

const posts: PostItem[] = [
  {
    slug: 'structuring-nuxt-config-for-multi-client-launches',
    title: 'Structuring Nuxt Config & Site Metadata for Fast Launches',
    excerpt: 'How centralizing runtime config, SEO tags, and brand settings keeps new client rollouts clean and predictable.',
    category: 'Engineering',
    date: 'Nov 12, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'ssr-safe-dark-mode-without-hydration-flicker',
    title: 'SSR-Safe Dark Mode Without Hydration Flicker',
    excerpt: 'Pairing a blocking head script with ClientOnly UI controls so theme toggles stay fast and error-free.',
    category: 'Performance',
    date: 'Nov 04, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'designing-simple-workflows-for-small-teams',
    title: 'Designing Simple Workflows That Teams Actually Adopt',
    excerpt: 'Why clear defaults, keyboard shortcuts, and readable tables beat cluttered multi-step screens.',
    category: 'Product',
    date: 'Oct 26, 2026',
    readTime: '6 min read',
  },
]

const filteredPosts = computed(() => {
  if (selectedCategory.value === 'All') return posts
  return posts.filter((post) => post.category === selectedCategory.value)
})
</script>

<template>
  <div class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          Blog
        </p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Notes & insights
        </h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
          Starter articles wired up for client-side filtering now—ready for Nitro API endpoints and `[slug]` routes in Milestone 2.
        </p>
      </div>

      <!-- Category Filter Pills -->
      <div class="mt-8 flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="rounded-full px-4 py-1.5 text-xs font-semibold transition"
          :class="
            selectedCategory === cat
              ? 'bg-indigo-600 text-white'
              : 'border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800'
          "
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Posts Grid -->
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
        >
          <div>
            <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span class="font-semibold text-indigo-600 dark:text-indigo-400">{{ post.category }}</span>
              <span>{{ post.date }} · {{ post.readTime }}</span>
            </div>
            <h2 class="mt-3 text-lg font-bold leading-snug text-slate-900 dark:text-white">
              {{ post.title }}
            </h2>
            <p class="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ post.excerpt }}
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
            >
              Read article &rarr;
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>