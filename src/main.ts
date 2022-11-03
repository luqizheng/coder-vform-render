import { createApp } from "vue";
import App from "./App.vue";
import './utils/require'
import "ant-design-vue/dist/antd.css";
import axios from "axios";
import Antd from "ant-design-vue";


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'
import DevelopCompents from '../lib'

//自定义组件导入
import customerCompoents from './widget-example/index'



const app = createApp(App);
app.use(DevelopCompents, { path: 'http://localhost:5000', request: axios })
   
    .use(Antd)
    .use(ElementPlus)
    .use(router)

Object.entries(customerCompoents).forEach(([key,value],index)=>
{

    app.component(key,value)
})

    app.mount("#app");



