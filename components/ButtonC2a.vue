<template>
  <ButtonBasic class-names="flex flex-row items-center bg-gradient-to-r from-lift-green to-lift-teal text-black uppercase font-bold max-h-10 justify-self-center">
    Try for free <img class="pl-2 h-4" src="../static/icons/arrow.svg">
  </ButtonBasic>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBasic from './ButtonBasic.vue'

export default Vue.extend({
  components: {
    ButtonBasic
  }
})
</script>
