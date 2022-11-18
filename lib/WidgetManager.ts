import { IScheam } from "coder-vform-render";
import { DefineComponent } from "vue";

interface IComponentsSetting {
    [key: string]: DefineComponent<{}, {}, any>
}

export class WidgetManger {

    containerFields = new Array<IScheam>()

    basicFields = new Array<IScheam>()

    advanceFields = new Array<IScheam>()

    customFields = new Array<IScheam>();


    components = {} as IComponentsSetting;

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
    addWidget(widgetCompoent: DefineComponent<{}, {}, any>, name: string | undefined) {
        if (name)
            widgetCompoent.name = name;
        this.components[widgetCompoent.name] = widgetCompoent;
    }
}
const widgetManager = new WidgetManger()
export default widgetManager;