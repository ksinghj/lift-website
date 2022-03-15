<template>
  <div class="flex flex-row justify-between items-center md:first:ml-5 last:mr-5 py-3">
    <LiftLogo />
    <Button />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LiftLogo from '../LiftLogo.vue'
import Button from '../ButtonC2a.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { LiftLogo, Button }
})
</script>
