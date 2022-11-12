import { IScheam } from "../../../types";

const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })
export default {
  install(app: any) {
    for (const path in modules) {
      let comp = modules[path] as any;
      app.component(comp.name, modules[path])
    }
  }
}


export const schema = new Map<string, IScheam>();

const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })
for (const path in schemaFiles) {
  let widgetSchema = schemaFiles[path] as IScheam;
  schema.set(path, widgetSchema);
}