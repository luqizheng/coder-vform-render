export default
    {
        type: 'time',
        icon: 'time-field',
        formItemFlag: true,
        options: {
            name: '',
            label: '',
            labelAlign: '',
            defaultValue: null,
            placeholder: '',
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
            format: 'HH:mm:ss',  //时间格式
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