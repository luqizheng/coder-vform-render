# coder-vform-render
代码来源 https://github.com/vform666/variant-form3-vite


# 改进
1. 分离 designer 和 render部分。
2. 导出自定义组件的必要部分
3. 自定义编辑器由design部分负责

# 附加组件
```
import {addWidget, addCustomWidgetSchema,addAdvanceFields,addBasicFieldSchema,addContainerWidgetSchema } from 'coder-vform-render'

addWidget(compoentWidget) // 添加组件
addCustomWidgetSchema({ //添加designerPanel
    type: "lable-form",
    icon: "alert",
    formItemFlag: true,
    options: {
      name: "",
      label: "LableForm",
      columnWidth: "200px",
      defaultValue: "",
      disabled: false,
      hidden: false,
      labelAlign: "",
      labelHidden: false,
      labelWidth: null,
      readonly: false,
      size: ""
    }
}) 


```
