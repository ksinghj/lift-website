<template>
  <button :class="['rounded-full p-3', classNames]">
    <slot />
  </button>
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
