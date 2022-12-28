import { createI18n } from './smart-vue-i18n/index'

import enLocaleElement from "element-plus/lib/locale/lang/en";
import zhLocaleElement from "element-plus/lib/locale/lang/zh-cn";
//import locale from "element-plus/lib/locale"

import enLocale from "../lang/en-US";
import zhLocale from "../lang/zh-CN";
import enLocale_render from "../lang/en-US_render";
import zhLocale_render from "../lang/zh-CN_render";
import enLocale_extension from "../lang/en-US_extension";
import zhLocale_extension from "../lang/zh-CN_extension";
import { getItem } from './storage'
interface dynamcProperty {
  [key: string]: any
}

const langResources: dynamcProperty = {

  'en-US': {
    something: {
      //...
    },
    ...enLocaleElement,
    ...enLocale,
    ...enLocale_render,
    ...enLocale_extension
  },

  'zh-CN': {
    something: {
      //...
    },
    ...zhLocaleElement,
    ...zhLocale,
    ...zhLocale_render,
    ...zhLocale_extension
  }
}

const i18n = createI18n({
  locale: getItem('v_form_locale') || 'zh-CN',
  messages: langResources
})

export const changeLocale = function (langName: string) {
  i18n.setLang(langName)
  localStorage.setItem('v_form_locale', langName)
}

export const translate = function (key: string) {
  return i18n.$st(key)
}



export const addZhCNLabel = (prop: string, value: string) => {
  langResources['zh-CN'].extension.widgetLabel[prop] = value
}
export const addZhCNSetting = (prop: string, value: string) => {
  langResources['zh-CN'].extension.setting[prop] = value
}
export const addENUSLabel = (prop: string, value: string) => {
  langResources['en-US'].extension.widgetLabel[prop] = value
}
export const addENUSSetting = (prop: string, value: string) => {
  langResources['en-US'].extension.setting[prop] = value
}

export const addLangSetting = (lang: string, prop: string, text: string) => {
  langResources[lang].extension.setting[prop] = text
}
export const addLangLabel = (lang: string, prop: string, text: string) => {
  langResources[lang].extension.widgetLabel[prop] = text
}

export const i18nt = (key: string) => {
  return i18n.$st(key)
}

export const i18n2t = (key1: string, key2: string) => {
  return i18n.$st2(key1, key2)
}

export default {
  methods: {
    i18nt(key: string) {
      return i18n.$st(key)
    },

    /* 如果key1不存在，则查找key2 */
    i18n2t(key1: string, key2: string) {
      return i18n.$st2(key1, key2)
    },
  },
  computed: {
    i18nMessage() {
      return i18n.messages;
    }
  }

}
