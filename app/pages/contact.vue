<!-- app/pages/contact.vue -->
<script setup lang="ts">
import { siteConfig } from '~/config/site'

useSeoMeta({
  title: 'Contact',
  description: `Get in touch with ${siteConfig.brand.name} for web development, design, and project inquiries.`,
  ogTitle: `Contact ${siteConfig.brand.name}`,
  ogDescription: `Get in touch with ${siteConfig.brand.name} for web development, design, and project inquiries.`,
})

const route = useRoute()

const form = reactive({
  name: '',
  email: '',
  subject: typeof route.query.service === 'string' ? `Inquiry: ${route.query.service}` : '',
  message: '',
})

const errors = reactive<{
  name?: string
  email?: string
  subject?: string
  message?: string
}>({})

const submitted = ref(false)
const submitting = ref(false)

function validate(): boolean {
  errors.name = undefined
  errors.email = undefined
  errors.subject = undefined
  errors.message = undefined

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Please enter your email address.'
    isValid = false
  } else if (!emailRegex.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address.'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Please add a subject for your inquiry.'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Please tell us a bit about your project or question.'
    isValid = false
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
    isValid = false
  }

  return isValid
}

async function handleSubmit() {
  submitted.value = false
  if (!validate()) return

  submitting.value = true
  // Placeholder client-side submission; hook into Nitro /api/contact in Milestone 2
  await new Promise((resolve) => setTimeout(resolve, 400))
  submitting.value = false
  submitted.value = true

  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}
</script>

<template>
  <div class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          Contact
        </p>
        <h1 class="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
          Let&rsquo;s talk about your project
        </h1>
        <p class="mt-4 text-base text-slate-600 dark:text-slate-400">
          Send a message using the form or reach out directly via email, phone, or our office details below.
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <!-- Contact Details Column -->
        <div class="space-y-6 lg:col-span-5">
          <div class="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/50">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Direct Contact</h2>
            <dl class="mt-5 space-y-4 text-sm">
              <div>
                <dt class="font-medium text-slate-500 dark:text-slate-400">Email</dt>
                <dd class="mt-1 font-semibold text-slate-900 dark:text-white">
                  <a :href="`mailto:${siteConfig.contact.email}`" class="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {{ siteConfig.contact.email }}
                  </a>
                </dd>
              </div>
              <div>
                <dt class="font-medium text-slate-500 dark:text-slate-400">Phone</dt>
                <dd class="mt-1 font-semibold text-slate-900 dark:text-white">
                  <a :href="`tel:${siteConfig.contact.phone}`" class="hover:text-indigo-600 dark:hover:text-indigo-400">
                    {{ siteConfig.contact.phone }}
                  </a>
                </dd>
              </div>
              <div>
                <dt class="font-medium text-slate-500 dark:text-slate-400">Location</dt>
                <dd class="mt-1 text-slate-700 dark:text-slate-300">{{ siteConfig.contact.address }}</dd>
              </div>
              <div>
                <dt class="font-medium text-slate-500 dark:text-slate-400">Business Hours</dt>
                <dd class="mt-1 text-slate-700 dark:text-slate-300">{{ siteConfig.contact.hours }}</dd>
              </div>
            </dl>
          </div>
        </div>

        <!-- Inquiry Form Column -->
        <div class="lg:col-span-7">
          <form
            novalidate
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs sm:p-8 dark:border-slate-800 dark:bg-slate-900/60"
            @submit.prevent="handleSubmit"
          >
            <div
              v-if="submitted"
              class="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-800/70 dark:bg-emerald-950/50 dark:text-emerald-300"
            >
              Thanks for reaching out! Your message has been validated and queued—we&rsquo;ll get back to you soon.
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name <span class="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  placeholder="Your full name"
                  class="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                <p v-if="errors.name" class="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                  {{ errors.name }}
                </p>
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email <span class="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="you@example.com"
                  class="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
                <p v-if="errors.email" class="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <!-- Subject -->
            <div class="mt-6">
              <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Subject <span class="text-rose-500">*</span>
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="How can we help?"
                class="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              <p v-if="errors.subject" class="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                {{ errors.subject }}
              </p>
            </div>

            <!-- Message -->
            <div class="mt-6">
              <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Message <span class="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="Share your goals, timeline, or any details you'd like us to know..."
                class="mt-2 block w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
              />
              <p v-if="errors.message" class="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
                {{ errors.message }}
              </p>
            </div>

            <div class="mt-6">
              <button
                type="submit"
                :disabled="submitting"
                class="inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {{ submitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>