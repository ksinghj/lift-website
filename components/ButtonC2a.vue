<template>
  <ButtonBasic :classNames="['flex flex-row items-center bg-gradient-to-r from-lift-green to-lift-teal text-black uppercase font-bold max-h-10', classNames]" :onClickFn="showModal">
    Try for free <img class="pl-2 h-4" src="../static/icons/arrow.svg">
  </ButtonBasic>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonBasic from './ButtonBasic.vue'

export default Vue.extend({
  components: {
    ButtonBasic
  },
  props: {
    classNames: {
      type: String,
      required: false
    }
  },
  methods: {
    showModal () {
      this.$root.$emit('modalOpen')
    }
  }
})
</script>
