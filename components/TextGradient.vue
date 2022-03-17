<template>
  <span :class="['text-gradient', 'text-transparent bg-clip-text bg-gradient-to-r from-lift-green to-lift-teal', [classNames]]">
    <slot />
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    classNames: {
      type: String,
      required: false
    }
  }
})
</script>
