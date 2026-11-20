<!-- app/layouts/default.vue -->
<script setup lang="ts">
import { siteConfig } from '~/config/site'

const config = useRuntimeConfig()
const route = useRoute()

const brandName = computed<string>(() => String(config.public.siteName || siteConfig.brand.name))
const currentYear = new Date().getFullYear()

// Mobile menu drawer state
const mobileMenuOpen = ref(false)

// Close mobile drawer automatically on route change
watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false
  }
)

// SSR-safe theme state
const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleTheme() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

function isActiveRoute(path: string): boolean {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <!-- Sticky Top Header Navbar -->
    <header
      class="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85"
    >
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <!-- Brand Logo & Name -->
        <NuxtLink to="/" class="flex items-center gap-2.5 font-bold tracking-tight text-slate-900 dark:text-white">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-extrabold text-white shadow-sm"
          >
            {{ brandName.charAt(0) }}
          </span>
          <span class="text-lg">{{ brandName }}</span>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <nav class="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          <NuxtLink
            v-for="item in siteConfig.nav"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3.5 py-2 text-sm font-medium transition-colors"
            :class="
              isActiveRoute(item.to)
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white'
            "
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Right Controls: Theme Toggle, CTA, Mobile Hamburger -->
        <div class="flex items-center gap-2">
          <!-- SSR-Safe Dark / Light Toggle -->
          <button
            type="button"
            aria-label="Toggle color theme"
            class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
            @click="toggleTheme"
          >
            <ClientOnly>
              <!-- Sun Icon (shown in Dark Mode) -->
              <svg
                v-if="isDark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-amber-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <!-- Moon Icon (shown in Light Mode) -->
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <template #fallback>
                <span class="h-4 w-4" />
              </template>
            </ClientOnly>
          </button>

          <!-- Desktop CTA -->
          <NuxtLink
            to="/contact"
            class="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 sm:inline-flex"
          >
            Get Started
          </NuxtLink>

          <!-- Mobile Hamburger Button -->
          <button
            type="button"
            class="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 md:hidden dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation menu"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg
              v-if="!mobileMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div
        v-show="mobileMenuOpen"
        class="border-t border-slate-200 bg-white px-4 pb-5 pt-3 md:hidden dark:border-slate-800 dark:bg-slate-950"
      >
        <nav class="flex flex-col space-y-1" aria-label="Mobile Navigation">
          <NuxtLink
            v-for="item in siteConfig.nav"
            :key="item.to"
            :to="item.to"
            class="rounded-lg px-3 py-2.5 text-base font-medium transition-colors"
            :class="
              isActiveRoute(item.to)
                ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/60 dark:text-indigo-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
            "
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-2">
            <NuxtLink
              to="/contact"
              class="block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Get Started
            </NuxtLink>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Page Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Multi-Column Footer -->
    <footer class="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          <!-- Brand & Contact Column -->
          <div class="lg:col-span-5">
            <NuxtLink to="/" class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-extrabold text-white"
              >
                {{ brandName.charAt(0) }}
              </span>
              <span class="text-lg">{{ brandName }}</span>
            </NuxtLink>
            <p class="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {{ siteConfig.brand.description }}
            </p>
            <div class="mt-5 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
              <p>{{ siteConfig.contact.address }}</p>
              <p>
                <a :href="`mailto:${siteConfig.contact.email}`" class="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {{ siteConfig.contact.email }}
                </a>
                ·
                <a :href="`tel:${siteConfig.contact.phone}`" class="hover:text-indigo-600 dark:hover:text-indigo-400">
                  {{ siteConfig.contact.phone }}
                </a>
              </p>
            </div>
          </div>

          <!-- Company Links -->
          <div class="lg:col-span-2">
            <h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              Company
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in siteConfig.footer.company" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Resources Links -->
          <div class="lg:col-span-2">
            <h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              Resources
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in siteConfig.footer.resources" :key="link.label">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Legal & Socials -->
          <div class="lg:col-span-3">
            <h3 class="text-sm font-semibold tracking-wider text-slate-900 uppercase dark:text-white">
              Legal & Connect
            </h3>
            <ul class="mt-4 space-y-2.5">
              <li v-for="link in siteConfig.footer.legal" :key="link.to">
                <NuxtLink
                  :to="link.to"
                  class="text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                v-for="social in siteConfig.socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-indigo-700 dark:hover:text-indigo-400"
              >
                {{ social.name }}
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div
          class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-500 sm:flex-row dark:border-slate-800 dark:text-slate-400"
        >
          <p>&copy; {{ currentYear }} {{ brandName }}. All rights reserved.</p>
          <p>{{ siteConfig.contact.hours }}</p>
        </div>
      </div>
    </footer>
  </div>
</template>