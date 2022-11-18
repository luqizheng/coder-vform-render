import { IScheam } from "coder-vform-render";
import { DefineComponent } from "vue";
//局部注册组件
import SvgIcon from './svg-icon/index.vue'
import ContainerItemWrapper from './form-render/container-item/container-item-wrapper.vue'
import GridColItem from './form-render/container-item/grid-col-item.vue'

import SubFormItem from './form-render/container-item/sub-form-item.vue'
import TabItem from './form-render/container-item/tab-item.vue'

import TableCellItem from './form-render/container-item/table-cell-item.vue'
import TableItem from './form-render/container-item/table-item.vue'



export const components = {} as IComponentsSetting;
components[SvgIcon.name] = SvgIcon
components[ContainerItemWrapper.name] = ContainerItemWrapper;
components[GridColItem.name] = GridColItem;
components[SubFormItem.name] = SubFormItem;
components[TabItem.name] = TabItem
components[TableCellItem.name] = TableCellItem
components[TableItem.name] = TableItem


interface IComponentsSetting {
    [key: string]: any
}

export class WidgetManger {

    constructor() {

    }

    containerFields = new Array<IScheam>()

    basicFields = new Array<IScheam>()

    advanceFields = new Array<IScheam>()

    customFields = new Array<IScheam>();




    addCustomWidgetSchema(fieldSchema: IScheam) {
        this.customFields.push(fieldSchema)

    }

    addAdvanceFields(fieldSchema: IScheam) {
        this.advanceFields.push(fieldSchema)

    }

    addBasicFieldSchema(fieldSchema: IScheam) {
        this.basicFields.push(fieldSchema);

    }
    /**
     * 
     * @param fieldSchema 
     */
    addContainerWidgetSchema(fieldSchema: IScheam) {
        this.containerFields.push(fieldSchema);

    }

    /**
     * 
     * @param widgetCompoent widget组件
     * @param name widget名称
     */
    addWidget(widgetCompoent: DefineComponent<{}, {}, any> | any, name: string | undefined = undefined) {
        if (name)
            widgetCompoent.name = name;
        components[widgetCompoent.name] = widgetCompoent;
    }
}
const widgetManager = new WidgetManger()
export default widgetManager;