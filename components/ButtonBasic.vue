<template>
  <button :class="['rounded-full p-3', classNames]" @click="onClickFn()">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue/types/options'

type ClassName = string | Array<any>

export default Vue.extend({
  props: {
    /**
     * classes applied to base button element
     */
    classNames: {
      type: Array as Prop<ClassName>,
      required: false
    },
    onClickFn: {
      type: Function,
      required: false
    }
  }
})
</script>
