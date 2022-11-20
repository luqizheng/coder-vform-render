
import { DefineComponent } from "vue";
//局部注册组件
import SvgIcon from './svg-icon/index.vue'

import { IScheam } from "./types";

export const widgets = {} as IWidgetComponents;
/**
 * 
 * @param widgetCompoent widget组件
 * @param name widget名称
 */
export const addWidget = (widgetCompoent: DefineComponent<{}, {}, any> | any, name: string | undefined = undefined) => {
    if (name)
        widgetCompoent.name = name;
    widgets[widgetCompoent.name] = widgetCompoent;
}

export const addCustomWidgetSchema = (fieldSchema: IScheam): void => {
    customFields.push(fieldSchema)

}

export const addAdvanceFields = (fieldSchema: IScheam): void => {
    advanceFields.push(fieldSchema)

}

export const addBasicFieldSchema = (fieldSchema: IScheam): void => {
    basicFields.push(fieldSchema);
}

export const addAdvanceCustomerFieldSchema = (fieldSchema: IScheam, panelTitle: string): void => {
    var fields = advanceCustomerFields.get(panelTitle);
    if (!fields) {
        fields = new Array<IScheam>();
        advanceCustomerFields.set(panelTitle, fields);
    }
    fields.push(fieldSchema);
}
/**
 * 
 * @param fieldSchema 
 */
export const addContainerWidgetSchema = (fieldSchema: IScheam): void => {
    containerFields.push(fieldSchema);

}

widgets[SvgIcon.name] = SvgIcon


export interface IWidgetComponents {
    [key: string]: any
}


export const containerFields = new Array<IScheam>()


export const basicFields = new Array<IScheam>()


export const advanceFields = new Array<IScheam>()

export const customFields = new Array<IScheam>();


export const advanceCustomerFields = new Map<string, Array<IScheam>>();
