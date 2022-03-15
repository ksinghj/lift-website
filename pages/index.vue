<template>
  <Header />
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layout/Header.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { Header }
})
</script>
