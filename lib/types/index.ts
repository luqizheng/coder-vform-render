export declare type Options = {
    path: string
}

export declare interface IWidgetScheam {
    type: string
    icon: string
    formItemFlag: boolean,
    options: object,
    col: Array<any> | undefined
}