export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook('render:response', response => {
    if (response.headers && response.headers['content-type']?.includes('text/html')) {
      const html = response.body?.toString?.()
      if (html) {
        response.body = html.replace(/></g, '>\n<')
      }
    }
  })
})
