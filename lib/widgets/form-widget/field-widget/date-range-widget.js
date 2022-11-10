export default {
    type: 'date-range',
    icon: 'date-range-field',
    formItemFlag: true,
    options: {
        name: '',
        label: '',
        labelAlign: '',
        type: 'daterange',
        defaultValue: null,
        startPlaceholder: '',
        endPlaceholder: '',
        columnWidth: '200px',
        size: '',
        autoFullWidth: true,
        labelWidth: null,
        labelHidden: false,
        readonly: false,
        disabled: false,
        hidden: false,
        clearable: true,
        editable: false,
        format: 'YYYY-MM-DD',  //日期显示格式
        valueFormat: 'YYYY-MM-DD',  //日期对象格式
        required: false,
        requiredHint: '',
        validation: '',
        validationHint: '',
        //-------------------
        customClass: '',  //自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        //-------------------
        onCreated: '',
        onMounted: '',
        onChange: '',
        onFocus: '',
        onBlur: '',
        onValidate: '',
    },
}