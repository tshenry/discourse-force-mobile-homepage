import { apiInitializer } from 'discourse/lib/api'
import { setDefaultHomepage } from 'discourse/lib/utilities'

export default apiInitializer(() => {
  setDefaultHomepage(settings.homepage)
})
