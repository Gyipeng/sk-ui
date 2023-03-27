<template>
  <button
    @click="$emit('click')"
    class="sk-button"
    :disabled="disabled"
    :class="[
    'sk-button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'sk-button--'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
export default{
  name: 'skButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: Boolean,
    disabled: Boolean,
    round: Boolean
  },
  data () {
    return {
      msg: 'button'
    }
  }
}
</script>
