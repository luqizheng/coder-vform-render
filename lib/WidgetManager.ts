
import { DefineComponent } from "vue";
//局部注册组件
import SvgIcon from './svg-icon/index.vue'
import ContainerItemWrapper from './form-render/container-item/container-item-wrapper.vue'
import GridColItem from './form-render/container-item/grid-col-item.vue'

import SubFormItem from './form-render/container-item/sub-form-item.vue'
import TabItem from './form-render/container-item/tab-item.vue'

import TableCellItem from './form-render/container-item/table-cell-item.vue'
import TableItem from './form-render/container-item/table-item.vue'
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
/**
 * 
 * @param fieldSchema 
 */
export const addContainerWidgetSchema = (fieldSchema: IScheam): void => {
    containerFields.push(fieldSchema);

}

widgets[SvgIcon.name] = SvgIcon
widgets[ContainerItemWrapper.name] = ContainerItemWrapper;
widgets[GridColItem.name] = GridColItem;
widgets[SubFormItem.name] = SubFormItem;
widgets[TabItem.name] = TabItem
widgets[TableCellItem.name] = TableCellItem
widgets[TableItem.name] = TableItem


export interface IWidgetComponents {
    [key: string]: any
}


export const containerFields = new Array<IScheam>()


export const basicFields = new Array<IScheam>()


export const advanceFields = new Array<IScheam>()

export const customFields = new Array<IScheam>();
