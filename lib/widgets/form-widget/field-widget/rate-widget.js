export default {
    type: 'rate',
    icon: 'rate-field',
    formItemFlag: true,
    options: {
        name: '',
        label: '',
        labelAlign: '',
        defaultValue: null,
        columnWidth: '200px',
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        required: false,
        requiredHint: '',
        validation: '',
        validationHint: '',
        //-------------------
        customClass: '',  //自定义css类名
        labelIconClass: null,
        labelIconPosition: 'rear',
        labelTooltip: null,
        max: 5,
        lowThreshold: 2,
        highThreshold: 4,
        allowHalf: false,
        showText: false,
        showScore: false,
        //-------------------
        onCreated: '',
        onMounted: '',
        onChange: '',
        onValidate: '',
    }
}