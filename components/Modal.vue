<template>
  <div class="absolute flex flex-row justify-center bg-black/50 w-screen h-screen top-0 left-0 z-20">
    <div class="m-5 p-5 mt-32 max-w-md max-h-72 bg-white">
      <img class="w-5 float-right" src="../static/icons/cancel.png">
      <slot />
    </div>
  </div>
</template>
