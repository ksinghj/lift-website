<template>
  <div class="root-div">
    <Header />
    <Hero />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/layout/Header.vue'
import Hero from '~/components/layout/Hero.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { Header, Hero }
})
</script>
