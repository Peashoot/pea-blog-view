import Vue from 'vue'
import VueI18n from 'vue-i18n'

// register i18n module
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'nb-NO', // if you need get the browser language use following "window.navigator.language"
  fallbackLocale: 'zh',
  messages: {
    'zh': require('@/assets/languages/zh.json'),
    'en': require('@/assets/languages/en.json')
  },
  silentTranslationWarn: true
})

const translate = (key: string) => {
  if (!key) {
    return ''
  }
  return i18n.t(key)
}

export { i18n, translate } // export above method
