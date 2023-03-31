import DynamicStyle from './dynamicStyle'
export default {
    data() {
        return {
            dynamicStyleObject: {},
            dynamicStyleString: ''
        }
    },
    computed: {
        className () {
            return `${this.dynamicName}_${this._uid}`
        }
    },
    created () {
        this.dynamicStyle = new DynamicStyle(this.className)
    },
    methods: {
        getDynamicTemplate () {
            return this.dynamicTemplate
        },
        setDynamicTemplate (dynamicTemplate) {
            this.dynamicTemplate = dynamicTemplate
        },
        setDynamicStyleString (dynamicStyleString) {
            this.dynamicStyleString = dynamicStyleString
            this.dynamicStyle.initStyle(dynamicStyleString)
        },
        getDynamicStyleString () {
            return this.dynamicStyleString
        },
        addDynamicStyleObject (object) {
            object.selector = `.${this.className} ${object.selector}`
            let string = this.dynamicStyle.cssObjectToCssString(object)
            this.dynamicStyle.addObjectStyle(string)
        },
        getDynamicStyleObject () {
            return this.dynamicStyleObject
        } 
    }


}