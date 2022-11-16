export * from './types'
import { WidgetPanelManger } from "./types";

import './styles/global.scss'

import VFormRender from './form-render/index.vue'
import ContainerItems from './form-render/container-item/index'




import validators from './utils/validators'

//coder changed
import SvgIcon1 from "./svg-icon/index.vue";

//api
import emitter1 from "./utils/emitter";

import i18n1, { translate as translate1 } from "./utils/i18n";
import fieldMixin1 from "./widgets/form-widget/field-widget/fieldMixin";
import * as  Util from './utils/util'
export {
    addENUSLabel as add_en_us_label, addENUSSetting as add_en_us_setting,
    addZhCNLabel as add_zh_cn_setting,
    addZhCNSetting as add_zh_cn_label, addLangSetting, addLangLabel,
    changeLocale
} from "./utils/i18n";

// 设计需要到处胡函数

export const Validators = validators
export const emitter = emitter1
export const i18n = i18n1
export const translate = translate1
export const fieldMixin = fieldMixin1
export const SvgIcon = SvgIcon1
export const util = Util
export const widgetManager = new WidgetPanelManger();



VFormRender.install = (app: any) => {



    app.component(VFormRender.name, VFormRender)
        .use(ContainerItems)


}

export default VFormRender 