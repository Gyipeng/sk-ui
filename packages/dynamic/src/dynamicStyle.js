class DynamicStyle {
    constructor (className) {
        this.className = className
    }
    initStyle (styleContent) {
        let styleNode = this.getStyleNode()
        this.setStyle(styleNode, styleContent)
        this.addStyle(styleNode)
    }
    setStyle(styleNode, cssText) {
        const regex = /(^|\})\s*([^{]*)\s*\{/gm;
        let match;
        while (match = regex.exec(cssText)) {
          let newRule = '';
          if (match[2].startsWith('.')) {
            newRule = `.${this.className} ${match[2]}`
          }
          else if (match[2].startsWith('#')) {
            newRule = `#${this.className} ${match[2]}`
          }
          cssText = cssText.replace(match[2], newRule);
        }
        this.setStyleContent(styleNode, cssText)
    }
    getStyleNode(className = this.className) {
        let elementNode = document.querySelector(`#${className}`)
        if (elementNode) {
          return elementNode
        }
        elementNode = this.createStyle(className)
        return elementNode
    }
    setStyleContent (styleNode, styleContent) {
        let styleContentNode = document.createTextNode(styleContent)
        styleNode.appendChild(styleContentNode)
    }
    createStyle (className) {
        let style = document.createElement('style')
        style.type = "text/css"
        style.id = className
        return style
    }
    addStyle (style) {
        let el = document.querySelector(`.${this.className}`)
        el.appendChild(style)
    }
    addObjectStyle (styleContent) {
        let styleNode = this.getStyleNode()
        this.setStyleContent(styleNode, styleContent)
    }
    cssObjectToCssString (object) {
        const { selector, style } = object
        if (!selector) {
          return ''
        }
        const styleString = typeof style === 'string' ? style : this.styleObjectToStyleString(style)
        const cssString = `${selector}${styleString}`
        return cssString
    }
    styleObjectToStyleString (style) {
        let styleString = '{';
        for (let i in style) {
          styleString += i + ':' + style[i] + ';';
        }
        styleString += '}'
        return styleString
    }
}

export default DynamicStyle