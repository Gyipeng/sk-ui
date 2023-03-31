<script>
let vueConent = `
<template>
  <div class="sk-dynamic" :class="className">
  </div>
</template>
<style>
  .sk-dynamic {

  }
</style>
`
import DynamicStyle from './dynamicStyle'
export default {
  name: 'skDynamic',
  data () {
    return {
    }
  },
  props: {
    dynamicTemplate: {
      type: String,
      default: vueConent
    },
    dynamicMethods: {
      type: Array,
      default: () => []
    },
    className: {
      type: String
    }
  },
  template: vueConent,
  created () {
    this.dynamicStyle = new DynamicStyle(this.className)
    this.initTemplate()
  },
  mounted () {
    this.initStyle()
    this.initMethod()
  },
  methods: {
    initStyle () {
      let styleContent = this.getStyleContent()
      this.dynamicStyle.initStyle(styleContent)
    },
    initTemplate () {
      this.$options.template =  this.getTemplateContent()
    },
    initMethod () {
      let that = this
      this.dynamicMethods.forEach((item) =>{
        let { event,  action, provideEl} = item
        let el = provideEl.call(that)
        el.addEventListener(event, action)
      })  
    },
    getStringConent (str, key) {
      const regExp = new RegExp(`<${key}>([\\s\\S]*?)</${key}>`)
      const match = regExp.exec(str);
      const content = match&&match[1];
      return content
    },
    cleanMethod (htmlStr) {
      const regexStr = /@\w+="[^"]*"\s*/g;
      const cleanedHtmlStr = htmlStr.replace(regexStr, '');
      return cleanedHtmlStr
    },
    getTemplateContent() {
      let str = this.dynamicTemplate
      let key = 'template'
      let template = this.getStringConent(str, key)
      return template
    },
    getStyleContent() {
       let str = this.dynamicTemplate
       let key = 'style'
       let style = this.getStringConent(str, key)
       return style
    }
  },
  destoryed() {
    this.dynamicMethods.forEach((item) =>{
      let { event,  action, provideEl} = item
      let el = provideEl.call(that)
      el.removeEventListener(event, action)
    })  
  }
  
}
</script>
