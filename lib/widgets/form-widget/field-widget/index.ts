import { IScheam } from "../../../types";

export const schema = new Array<IScheam>();

const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })
for (const path in schemaFiles) {

  if (path == "./fieldMixin.js")
    continue;
  let widgetSchema = schemaFiles[path] as IScheam;
  schema.push(widgetSchema);
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
