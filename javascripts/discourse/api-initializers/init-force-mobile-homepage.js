import { apiInitializer } from 'discourse/lib/api'
import { setDefaultHomepage } from 'discourse/lib/utilities'

export default apiInitializer(api => {
  const capabilities = api.container.lookup('service:capabilities')

  if (capabilities.isMobileDevice) {
    setDefaultHomepage(settings.homepage)
  }
})
