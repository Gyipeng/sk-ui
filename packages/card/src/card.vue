
<template>
   <div class="sk-plain-card">
     <div class= "sk-plain-card__img">
      <i class="el-icon-platform-eleme sk-plain-card__icon"></i> 
     </div>
     <div class="sk-plain-card__container">
      <div class="sk-plain-card__header">
        <div class="sk-plain-card__title">
          {{title}}
        </div>
         <div class="sk-plain-card__subHeader">
          {{subTitle}}
        </div>
      </div>
       <div class="sk-plain-card__des"> {{desc}}</div>
     </div>
   </div>
</template>

<script>
const classnames = require('classnames')
export default {
  name: 'skCard',
  data () {
    return {

    }
  },
  props: {
    icon: {
      type: String,
      default: 'el-icon-platform-eleme'
    },
    desc: String,
    title: String,
    subTitle: {
      type: String,
      default: '立即分析教学视频'
    }
  },
  computed: {
    cls () {
      const className = classnames('sk-card', {[`sk-card--${this.size}`]: !!this.size})
      return className
    }
  }
}
</script>
