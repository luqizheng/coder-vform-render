export default 
{
  type: 'checkbox',
  icon: 'checkbox-field',
  formItemFlag: true,
  options: {
    name: '',
    label: '',
    labelAlign: '',
    defaultValue: [],
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
      {label: 'check 1', value: 1},
      {label: 'check 2', value: 2},
      {label: 'check 3', value: 3},
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