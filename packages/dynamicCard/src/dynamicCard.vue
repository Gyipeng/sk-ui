<script>
let vueConent = `
<template>
  <div class="sk-dynamic-card" :class="className" >
    12345
      <el-button ref="button">123</el-button>
  </div>
</template>
<style>
  .sk-dynamic-card{background-color: red; }
  .sk-a-ca {
    color: 
  }
</style>
`
export default {
  name: 'skDynamicCard',
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
      type: Object,
      default: () => {
        return {}
      }
    }
    
  },
  template: vueConent,
  created () {
    this.initStyle()
    this.initTemplate()
  },
  computed: {
    className() {
      return `sk-dynamic-card${this._uid}`
    },
    componentId() {
      return this._uid
    }
  },
  methods: {
    getStringConent (str, key) {
      const regExp = new RegExp(`<${key}>([\\s\\S]*?)</${key}>`)
      const match = regExp.exec(str);
      const content = match[1];
      return content
    },
    initTemplate () {
      this.$options.template =  this.getTemplateContent()
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
    },
    initStyle () {
      let className = `${this.className}`
      let styleContent = this.getStyleContent()
      let styleNode = this.getStyleNode(className)
      this.setStyle(styleNode, styleContent)
      this.addHead(styleNode)
    },
    setStyle(styleNode, cssText) {
      const regex = /(^|\})\s*([^{]*)\s*\{/gm;
      let match;
      while (match = regex.exec(cssText)) {
        let newRule = '';
        if (match[2].startsWith('.')) {
          newRule = `.${this.className}` + match[2];
        }
        else if (match[2].startsWith('#')) {
          newRule = `#${this.className}` + match[2];
        }
        cssText = cssText.replace(match[2], newRule);
      }
      this.setStyleContent(styleNode, cssText)
    },
    getStyleNode(className) {
      let elementNode = document.getElementsByClassName(className)
      if (elementNode.length > 0) {
        return elementNode[0]
      }
      elementNode = this.createStyle(className)
      return elementNode
    },
    // addStyle () {
    //   let style = this.createStyle()
    //   let setStyleContent = this._getStyle()
    //   this.setStyleContent(style, setStyleContent)
    //   this.addHead(style)
    // },
    setStyleContent (styleNode, styleContent) {
      let styleContentNode = document.createTextNode(styleContent)
      styleNode.appendChild(styleContentNode)
    },
    createStyle (className) {
      let style = document.createElement('style')
      style.type = "text/css"
      style.class = className
      return style
    },
    addHead (style) {
      let head = document.getElementsByTagName('head')[0]
      head.appendChild(style)
    }
  }
  
}
</script>
<style style="scoped">
  .sk-dynamic-card {
    clear: red;
  }
</style> 
