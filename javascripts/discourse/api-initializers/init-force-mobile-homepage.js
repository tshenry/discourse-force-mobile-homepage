import { apiInitializer } from 'discourse/lib/api'
import { setDefaultHomepage } from 'discourse/lib/utilities'

export default apiInitializer(api => {
  const site = api.container.lookup('service:site')

  if (site.mobileView) {
    setDefaultHomepage(settings.homepage)
  }
})
