
interface IFieldCompoents {
    [key: string]: any;
}
export const FieldCompoents: IFieldCompoents =
{

}
/**添加widget */
export const addWidget = (name: string, widget: any): void => {
    FieldCompoents[name] = widget;
}