
import Button from './button/index.js'
import Card from './card/index.js'
import style from '../utils/style'
import filters from '../utils/filter'

const components = [
  Button,
  Card
]

const directives = {
  width: style.width,
  color: style.color,
  'bg-color': style.bgColor,
  height: style.height,
  padding: style.padding,
  margin: style.margin,
  font: style.font

}

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))

  Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
  })

  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Card,
  Button
}

export {
  install,
  Card,
  Button
}
