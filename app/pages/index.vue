<script lang="ts" setup>
import { computed } from 'vue';
import type { CategoryImage } from '~~/models/Images';

// Daten asynchron laden
const displayImages: Ref<CategoryImage[]> = await useRandomImages();
const slugOrder = ['art', 'taddozz', 'photo', '3d'];

// Sicher sortieren über ein Computed Property (verhindert Mutation des Original-States)
const sortedImages = computed(() => {
  if (!displayImages.value) return [];

  return [...displayImages.value].sort((a, b) => {
    let indexA = slugOrder.indexOf(a.slug);
    let indexB = slugOrder.indexOf(b.slug);

    if (indexA === -1) indexA = Infinity;
    if (indexB === -1) indexB = Infinity;

    return indexA - indexB;
  });
});
</script>

<template>
  <main class="scroll-container">

    <!-- Erste Sektion: Menü -->
    <div class="fullscreen-sec">
      <menu class="menu">
        <StartpageMenuItem v-for="(item, index) in sortedImages" :key="item.slug || index" :item="item"
          :index="index" />
      </menu>
    </div>

    <!-- Zweite Sektion: About -->
    <div class="fullscreen-sec">
      <section class="about-section">
        <h2>ABOUT</h2>
        <p>
          Hi! <br /><br />
          I fall in love with places that are free and open, with storys that show passion and courage, with people
          thinking outside the box who make me wanna believe in this world, with movements that change it for the
          better. Noone is free until we all are free.
          <br /><br />
          This right here is my visual journey in this world.
          A journey as a self-taught young artist by heart, studied graphic designer and photographer based in
          Germany.
          I‘m currently in training to become a tattoo artist as well.
          My artstyle is abstract, organic, symmetric and often trippy. I hope you'll find inspiration here. Feel
          invited
          to dive deep into my creative space, feel some VISUAL XTC! :)
          <br /><br />
          -Terry
        </p>
      </section>
    </div>

  </main>
</template>

<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;

  // Verhindert das Übereinanderlappen beim Navigieren
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }
}

.fullscreen-content-wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.bow {
  width: 90%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
}

.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 70%;
  padding: 0;
  margin: 0;
}

.fullscreen-sec {
  display: flex;
  // Nutzt min-height, damit Inhalte bei kleinen Screens nicht abgeschnitten werden
  min-height: calc(100vh - 60px);
  width: 100%; // Auf 100% korrigiert, da 50vw die Seite horizontal halbiert hätte
  align-items: center;
  justify-content: center;
  flex-shrink: 0; // Verhindert, dass die Sektionen gestaucht werden
}

.about-section {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    text-align: center;
    line-height: 1.6;
  }
}
</style>