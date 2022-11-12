const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app) {
    for (const path in modules) {
      let cname = modules[path].name
      app.component(cname, modules[path])
    }
  }
}