import { IScheam } from "../../../types";
import { widgetManager } from "../../..";
import { DefineComponent } from "vue";

const schemaFiles = import.meta.glob('./*.ts', { eager: true, import: 'default' })
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app: any) {

    //add widget compoents
    for (const path in modules) {
      let comp = modules[path] as DefineComponent<{}, {}, any>

      widgetManager.addWidget(comp, undefined);
      //app.component(comp.name, comp)
    }

    //add schema for designer.
    for (const path in schemaFiles) {

      if (path == "./fieldMixin.js")
        continue;
      let widgetSchema = schemaFiles[path] as IScheam;

      widgetManager.addBasicFieldSchema(widgetSchema)
    }


  }
}
