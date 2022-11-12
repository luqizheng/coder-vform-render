import { IWidgetScheam } from "../../../types";



export const schema = new Map<string, IWidgetScheam>();

const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })


for (const path in schemaFiles) {
  let widgetSchema = schemaFiles[path] as IWidgetScheam;
  schema.set(path, widgetSchema);
}
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app: any) {
    for (const path in modules) {
      let comp = modules[path] as any;

      app.component(comp.name, modules[path])
    }
  }
}
