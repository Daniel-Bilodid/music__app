import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import uk from '@/locales/uk.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    uk
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    ja: {
      currency: {
        style: 'currency',
        currency: 'JPY'
      }
    }
  }
})
