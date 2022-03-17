<template>
  <div class="flex flex-col mt-4 sm:flex-row sm:mt-20 sm:mx-24 md:justify-center md:mt-32">
    <div class="grid gap-y-8 mx-6 lg:mr-32 lg:max-h-96 md:max-w-md">
      <h1 class="font-bold text-3xl md:text-4xl xl:text-5xl">
        <TextGradient>Leave the notepad</TextGradient> at home, and forget Excel.
      </h1>
      <h2 class="font-semibold text-xl md:text-2xl xl:text-3xl mr-8 my-6 mb-14 sm:mb-0">
        You say you’re applying progressive overload, <TextGradient>but how do you know?</TextGradient>
      </h2>
      <ButtonC2a classNames="hidden md:flex justify-self-start" />
    </div>
    <img class="w-2/3 sm:w-2/5 md:w-1/3 lg:max-w-xs self-center" src="../../static/iphone-progress.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ButtonC2a from '../ButtonC2a.vue'
import TextGradient from '../TextGradient.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { ButtonC2a, TextGradient }
})
</script>
