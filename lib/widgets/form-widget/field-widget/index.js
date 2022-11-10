


export const schema = {}

const schemaFiles = import.meta.glob('./*.js', { eager: true, import: 'default' })


for (const path in schemaFiles) {
  let cname = schemaFiles[path].name
  schema[cname] = schemaFiles[path]
}
const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app) {
    for (const path in modules) {
      let cname = modules[path].name
      app.component(cname, modules[path])
    }
  }
}
