export declare type Options = {
    path: string
}

export declare interface IWidgetScheam {
    type: string
    icon: string
    formItemFlag: boolean | undefined,
    options: object,
    col: Array<any> | undefined
}

export declare interface IWidgetContainerSchema extends IWidgetScheam {
    widgetList: Array<any>,
}