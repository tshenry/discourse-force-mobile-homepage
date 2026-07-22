import { apiInitializer } from 'discourse/lib/api'
import { defaultHomepage, setDefaultHomepage } from 'discourse/lib/utilities'

export default apiInitializer(api => {
  const capabilities = api.container.lookup('service:capabilities')
  const router = api.container.lookup('service:router')

  let siteDefault

  router.on('routeWillChange', () => {
    siteDefault ??= defaultHomepage()

    setDefaultHomepage(
      capabilities.viewport.sm ? siteDefault : settings.homepage
    )
  })
})
