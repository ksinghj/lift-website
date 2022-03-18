<template>
  <div class="flex flex-row justify-between items-center md:first:ml-5 lg:first:ml-8 lg:first:pt-4 last:mr-5 p-3">
    <LiftLogo />
    <ButtonC2a />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LiftLogo from '../LiftLogo.vue'
import ButtonC2a from '../ButtonC2a.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { LiftLogo, ButtonC2a }
})
</script>
