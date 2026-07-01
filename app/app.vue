<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

useHead({
  meta: [
    { name: 'robots', content: 'noimageindex' }
  ]
})

const route = useRoute();

const showBows = computed(() => {
  return !route.path.startsWith('/work/');
});
</script>

<template>
  <NuxtRouteAnnouncer />
  <Header />
  <main :class="{ 'scroll-container': showBows }" class="mainpage">
    <div v-if="showBows" aria-hidden="true" class="bow-wrapper">
      <img src="/bogen/BogenL.svg" alt="bogenL" />
    </div>
    <NuxtPage />
    <div v-if="showBows" aria-hidden="true" class="bow-wrapper">
      <img src="/bogen/BogenR.svg" alt="bogenR" />
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
.mainpage {
  height: calc(100vh - 60px);
}

.scroll-container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  width: 100%;
}

.bow-wrapper {
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 15vw;
    height: auto
  }
}
</style>