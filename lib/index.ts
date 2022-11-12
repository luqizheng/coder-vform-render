export * from './types'
import { App } from 'vue'
import { IScheam, IWidgetScheam } from './types'
import './styles/global.scss'

import VFormRender from './form-render/index.vue'
import ContainerItems from './form-render/container-item/index'
import BasicWidgets from './widgets/basic-widget/index'
import FieldWidget from './widgets/form-widget/field-widget/index'
import ContainerWidget from './widgets/form-widget/container-widget/index'

import validators from './utils/validators'

//coder changed
import SvgIcon1 from "./svg-icon/index.vue";


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

//schema
import HtmlTextWidgetSchema from './widgets/basic-widget/html-text-widget.js'
import StaticTextWidgetSchema from './widgets/basic-widget/static-text-widget.js'
import { schema } from './widgets/form-widget/field-widget/index.js'
import { schema as containerSchema } from './widgets/form-widget/container-widget/index'

// 设计需要到处胡函数

export const Validators = validators
export const emitter = emitter1
export const i18n = i18n1
export const translate = translate1
export const fieldMixin = fieldMixin1
export const SvgIcon = SvgIcon1
export const util = Util
export const GetBasicSchema = (): Map<string, IScheam> => {
    schema.set("HtmlTextWidget", HtmlTextWidgetSchema);
    schema.set("StaticTextWidget", StaticTextWidgetSchema)
    containerSchema.forEach((value, key) => {
        schema.set(key, value);
    })
    return schema;
}

VFormRender.install = (app: App) => {
    app.component(VFormRender.name, VFormRender)
        .use(ContainerItems)
        .use(BasicWidgets)
        .use(FieldWidget)
        .use(ContainerWidget)

    //app.component('svg-icon', SvgIcon)

}

export default VFormRender 