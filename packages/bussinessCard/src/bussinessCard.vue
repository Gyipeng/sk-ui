
<template>
   <div class="sk-bussiness-plain-card">
    <sk-card :title="title" :desc="desc" :subTitle="subTitle"></sk-card>
   </div>
</template>

<script>

import axios from "axios"
export default {
  name: 'skBussinessCard',
  data () {
    return {
      desc: '',
      title: '',
      subTitle: ''
    }
  },
  mounted () {
    axios('/smartbi/smartbix/api/pages/userprops').then(({data}) => {
      let attr =  ['desc', 'title', 'subTitle' ]
      attr.forEach((item, index) => {
        const { alias } = data[index]
        this[item] = alias
      })
    })
  }
  
}
</script>
