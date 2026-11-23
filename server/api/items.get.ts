export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  return await $fetch(`${config.apiBaseUrl}/health`, {
    timeout: 5000
  })
})