


export class WidgetManger {

  containerFields = new Array<object>()

  basicFields = new Array<object>()

  advanceFields = new Array<object>()

  customFields = new Array<object>();

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
}


const widgetManager = new WidgetManger();
export default widgetManager;