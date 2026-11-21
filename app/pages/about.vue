<!-- app/pages/about.vue -->
<script setup lang="ts">
const site = useSite()
const { siteName } = site

useSeoMeta({
  title: 'About Us',
  description: () => `Learn about ${siteName.value}, our story, core values, and the team behind our work.`,
  ogTitle: () => `About ${siteName.value}`,
  ogDescription: () => `Learn about ${siteName.value}, our story, core values, and the team behind our work.`,
})

const values = [
  {
    title: 'Clarity Over Complexity',
    description: 'We favor clean, maintainable solutions that teams can understand and extend without friction.',
  },
  {
    title: 'Ownership & Accountability',
    description: 'We treat every client product like our own—flagging trade-offs early and following through.',
  },
  {
    title: 'Speed With Quality',
    description: 'Fast iteration cycles backed by strong fundamentals, responsive layouts, and reliable APIs.',
  },
]

const team = [
  {
    name: 'Brian Kilel',
    role: 'Lead Full-Stack Engineer',
    bio: 'Focuses on modern web applications, clean UI architecture, and reliable backend APIs.',
    initials: 'BK',
  },
  {
    name: 'Wanjiku Kamau',
    role: 'Product & UI Designer',
    bio: 'Designs intuitive interfaces, component systems, and clear user journeys across devices.',
    initials: 'WK',
  },
  {
    name: 'Tariq Omar',
    role: 'Backend & Cloud Specialist',
    bio: 'Builds resilient data layers, integrations, and automated deployment workflows.',
    initials: 'TO',
  },
]
</script>

<template>
  <div class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Story Header -->
      <div class="max-w-3xl">
        <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          About {{ siteName }}
        </p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Built to help ambitious teams ship better software
        </h1>
        <p class="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
          {{ siteName }} started with a straightforward goal: bridge the gap between polished digital
          presence and dependable software engineering. Whether launching a brand-new marketing site or untangling a
          core workflow, we focus on practical execution that lasts.
        </p>
      </div>

      <!-- Mission & Values -->
      <div class="mt-16">
        <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Core Values
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div
            v-for="val in values"
            :key="val.title"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
          >
            <h3 class="text-lg font-semibold text-slate-900 dark:text-white">{{ val.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ val.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- Team Grid -->
      <div class="mt-20">
        <div class="max-w-2xl">
          <h2 class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Meet the Team
          </h2>
          <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A lean, hands-on crew working directly with you from discovery to launch.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="member in team"
            :key="member.name"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white"
            >
              {{ member.initials }}
            </div>
            <h3 class="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{{ member.name }}</h3>
            <p class="text-xs font-medium text-indigo-600 dark:text-indigo-400">{{ member.role }}</p>
            <p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>