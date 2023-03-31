<template>
  <sk-dynamic-wrapper 
    v-bind="$attrs"
    :dynamicTemplate="dynamicTemplate"
    :dynamicMethods="dynamicMethods"
    :className="className"
  >
  </sk-dynamic-wrapper>
</template>

<script>
let vueConent = `
<template>
   <div class="sk-plain-card sk-dynamic-card" :class="className">
     <div class= "sk-plain-card__img">
      <i class="el-icon-platform-eleme sk-plain-card__icon"></i> 
     </div>
     <div class="sk-plain-card__container">
      <div class="sk-plain-card__header">
        <div class="sk-plain-card__title">
          {{$attrs.title}}
        </div>
         <div class="sk-plain-card__subHeader">
          {{$attrs.subTitle}}
        </div>
      </div>
       <div class="sk-plain-card__des"> {{$attrs.desc}}</div>
     </div>
   </div>
</template>
<style>
  .sk-plain-card__container{background-color: #f2f2f2; }
</style>
`
import skDynamicWrapper from '../../dynamic/src/dynamicWrapper.vue'
import dynamic from '../../dynamic/src/dynamic.js'
export default {
  name: 'skDynamicCard',
  data () {
    return {
      dynamicTemplate: vueConent,
      dynamicMethods: [],
      dynamicName: 'sk-dynamic-card'
    }
  },
  mixins:[dynamic],
  mounted () {
  },
  components: {
    skDynamicWrapper
  },
}
</script>
