<template>
  <div class="root-div bg-white">
    <div class="relative">
      <Header />
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
        <img class="w-2/3 sm:w-2/5 md:w-1/3 lg:max-w-xs self-center" src="../static/iphone-progress.png" alt="iPhone showing LIFT app in use">
      </div>
      <footer class="flex flex-col items-center mt-24 bg-wave bg-cover bg-no-repeat">
        <img class="shadow w-24 rounded-xl lg:mt-24 xl:mt-28 2xl:mt-36" src="../static/icon.png">
        <p class="text-center text-white font-semibold py-5">
          Available on
        </p>
        <AppStoreLinks />
      </footer>
      <Modal>
        <h4 class="font-bold text-3xl text-center my-10 px-2">
          <TextGradient>Download</TextGradient> for iOS & Android:
        </h4>
        <AppStoreLinks />
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Header from '~/components/layout/Header.vue'
import ButtonC2a from '~/components/ButtonC2a.vue'
import TextGradient from '~/components/TextGradient.vue'
import Modal from '~/components/Modal.vue'
import AppStoreLinks from '~/components/AppStoreLinks.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { Header, ButtonC2a, TextGradient, Modal, AppStoreLinks },
  data () {
    return {
      showModal () {
        const modal = document.querySelector('.modal') as HTMLElement
        modal.style.top = `${window.scrollY}px`

        document.querySelector('body')?.classList.add('modal--show')
        document.querySelector('.modal')?.classList.remove('hidden')
      },
      closeModal () {
        document.querySelector('body')?.classList.remove('modal--show')
        document.querySelector('.modal')?.classList.add('hidden')
      }
    }
  },
  mounted () {
    this.$root.$on('modalOpen', () => {
      this.showModal()
    })
    this.$root.$on('modalClose', () => {
      this.closeModal()
    })
  }
})
</script>
