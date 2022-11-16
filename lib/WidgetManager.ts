import { DefineComponent } from "vue";


export class WidgetManger {

    containerFields = new Array<object>()

    basicFields = new Array<object>()

    advanceFields = new Array<object>()

    customFields = new Array<object>();


    components = new Array<DefineComponent<{}, {}, any>>();

    addCustomWidgetSchema(fieldSchema: object) {
        this.customFields.push(fieldSchema)

    }

    addAdvanceFields(fieldSchema: object) {
        this.advanceFields.push(fieldSchema)

    }

    addBasicFieldSchema(fieldSchema: object) {
        this.basicFields.push(fieldSchema);

    }
    addContainerWidgetSchema(fieldSchema: object) {
        this.containerFields.push(fieldSchema);

    }

    addComponents(widgetCompoent: DefineComponent<{}, {}, any>) {
        this.components.push(widgetCompoent);
    }
}
const widgetManager = new WidgetManger()
export default new WidgetManger();