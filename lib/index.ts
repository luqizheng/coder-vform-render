export * from './types'
export * from "./WidgetManager";


import render from  './form-render/index.vue'
import './styles/global.scss'

//import VFormRender from './form-render/index.vue'
import ContainerItems from './form-render/container-item/index'
import validators from './utils/validators'
import BasicFieldWidget from './widgets/form-widget/field-widget/index'
//coder changed
import SvgIcon1 from "./svg-icon/index.vue";
//api
import emitter1 from "./utils/emitter";

import i18n1, { translate as translate1, i18n2t as I18n2t, i18nt as I18nt } from "./utils/i18n";
import fieldMixin1 from "./widgets/form-widget/field-widget/fieldMixin";
import * as  Util from './utils/util'
export {
    addENUSLabel as add_en_us_label,
    addENUSSetting as add_en_us_setting,
    addZhCNLabel as add_zh_cn_label,
    addZhCNSetting as add_zh_cn_setting,
    addLangSetting,
    addLangLabel,
    changeLocale
} from "./utils/i18n";


//扩展需要你
import formItemWrapper from './widgets/form-widget/field-widget/form-item-wrapper.vue'
import staticContentWrapper from './widgets/form-widget/field-widget/static-content-wrapper.vue'
import { defineAsyncComponent } from 'vue';

export const FormItemWrapper = formItemWrapper
export const StaticContentWrapper = staticContentWrapper
export const i18n2t = I18n2t
export const i18nt = I18nt
// 设计需要到处胡函数
export const Validators = validators
export const emitter = emitter1
export const i18n = i18n1
export const translate = translate1
export const fieldMixin = fieldMixin1
export const SvgIcon = SvgIcon1
export const util = Util


export default {
    install: (app: any) => {
        app.component("v-form-render", render)
            .use(ContainerItems).use(BasicFieldWidget)
    }
} 