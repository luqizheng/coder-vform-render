export default {
    type: 'radio',
    icon: 'radio-field',
    formItemFlag: true,
    options: {
        name: '',
        label: '',
        labelAlign: '',
        defaultValue: null,
        columnWidth: '200px',
        size: '',
        displayStyle: 'inline',
        buttonStyle: false,
        border: false,
        labelWidth: null,
        labelHidden: false,
        disabled: false,
        hidden: false,
        optionItems: [
            { label: 'radio 1', value: 1 },
            { label: 'radio 2', value: 2 },
            { label: 'radio 3', value: 3 },
        ],
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
        onValidate: '',
    }
}