import prettier from 'prettier'

export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('render:response', async response => {
    if (response.headers && response.headers['content-type']?.includes('text/html')) {
      const html = response.body?.toString?.()
      if (html) {
        try {
          const formatted = await prettier.format(html, {
            parser: 'html',
          })
          response.body = formatted
        } catch (e) {
          console.warn('Prettier formatting failed:', e)
        }
      }
    }
  })
})
