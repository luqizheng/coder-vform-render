import { IWidgetScheam } from "../../../types";

export default {
    type: 'html-text',
    icon: 'html-text',
    formItemFlag: false,
    options: {
        name: '',
        columnWidth: '200px',
        hidden: false,
        htmlContent: '<b>html text</b>',
        //-------------------
        customClass: '',  //自定义css类名
        //-------------------
        onCreated: '',
        onMounted: '',
    },
} as IWidgetScheam