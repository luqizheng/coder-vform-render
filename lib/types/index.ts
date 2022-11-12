export declare type IScheam = {
    /*字段组件的类型名称，必须唯一，不能跟已有组件重复；*/
    type: string
    /**
     * 
     */
    icon: string
    /**
     * 容器图标名称，可以去iconfont.cn下载所需的svg文件，放入src/icons/svg目录即可（自动加载）；
     */
    options: object,
}

export declare interface IWidgetScheam extends IScheam {

    /**是否需嵌套于el-form-item */
    formItemFlag: boolean


}

export declare interface IWidgetContainerSchema extends IScheam {
    widgetList: Array<any>,
}