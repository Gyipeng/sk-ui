<template>
    <sk-dynamic 
      :dynamicTemplate="dynamicTemplate"
      :dynamicMethods="dynamicMethods"
      :key="index"
      v-bind="$attrs"
    >
    </sk-dynamic>    
</template>

<script>
import skDynamic from './dynamic.vue'
export default {
  name: 'skDynamicWrapper',
  data () {
    return {
      index: 0
    }
  },
  components: {
    skDynamic
  },
  props: {
    dynamicTemplate: {
      type: String
    },
    dynamicMethods: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    dynamicTemplate() {
      this.index++
    }
  }
}
</script>
