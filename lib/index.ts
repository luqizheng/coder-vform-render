export * from './types'
import { App } from 'vue'
import { Options } from './types'

import VFormRender from './form-render/index.vue'
import ContainerItems from './form-render/container-item/index'
import ContainerWidgets from './widgets/basic-widget/index'
import validators  from './utils/validators'

//coder changed
import SvgIcon1 from "./svg-icon/index.vue";
import FormItemWrapper1 from "./widgets/form-widget/field-widget/form-item-wrapper.vue";
import ContainerMixin1 from "./widgets/form-widget/container-widget/containerMixin"
import ContainerWrapper1 from "./widgets/form-widget/container-widget/container-wrapper.vue"
import staticContentWrapper from './widgets/form-widget/field-widget/static-content-wrapper.vue'
import emitter1 from "./utils/emitter";
import i18n1, { translate as translate1 } from "./utils/i18n";
import fieldMixin1 from "./widgets/form-widget/field-widget/fieldMixin";
import * as  Util from './utils/util'
export {
    addENUSLabel as add_en_us_label, addENUSSetting as add_en_us_setting,
    addZhCNLabel as add_zh_cn_setting,
    addZhCNSetting as add_zh_cn_label, addLangSetting, addLangLabel
} from "./utils/i18n";



import basicWidget from './widgets/basic-widget'
import formContainer from './widgets/form-widget/container-widget'
import fieldWidgets from './widgets/form-widget/field-widget'
//schema
import HtmlTextWidget from './widgets/basic-widget/html-text-widget.js'
import StaticTextWidget from './widgets/basic-widget/static-text-widget.js'
import { schema } from './widgets/form-widget/field-widget/index.js'

export const Validators = validators

// 设计的design

export const SvgIcon = SvgIcon1
export const emitter = emitter1
export const i18n = i18n1
export const translate = translate1
export const fieldMixin = fieldMixin1
export const FormItemWrapper = FormItemWrapper1
export const ContainerMixin = ContainerMixin1
export const ContainerWrapper = ContainerWrapper1
export const StaticContentWrapper = staticContentWrapper
export const util = Util
export const GetBasicSchema = () => {
    return Object.assign(schema, {
        HtmlTextWidget,
        StaticTextWidget,

    })
}

VFormRender.install = (app: App) => {
    app.component(VFormRender.name, VFormRender)
    app.use(basicWidget).use(formContainer)
    basicWidget.install(app);
    formContainer.install(app);
    fieldWidgets.install(app);
}

export default VFormRender 