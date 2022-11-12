
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app: any) {
    for (const path in modules) {
      let comp = modules[path] as any;

      app.component(comp.name, modules[path])
    }
  }
}
