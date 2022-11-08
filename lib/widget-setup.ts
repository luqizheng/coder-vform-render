
interface IFieldCompoents {
    [key: string]: any;
}
export const FieldComponents: IFieldCompoents =
{

}
/**添加widget */
export const addWidget = (name: string, widget: any): void => {
    FieldComponents[name] = widget;
}

export default FieldComponents