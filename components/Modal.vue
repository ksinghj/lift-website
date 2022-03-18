<template>
  <div class="modal hidden absolute flex flex-row justify-center bg-black/50 w-screen h-screen top-0 left-0 z-20">
    <div class="m-5 p-5 mt-32 max-w-md max-h-72 bg-white">
      <img class="w-5 float-right hover:cursor-pointer" src="../static/icons/cancel.png" @click="closeModal()">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// import store from '../store'

export default Vue.extend({
  methods: {
    closeModal () {
      this.$root.$emit('modalClose')
    }
  }
})
</script>
