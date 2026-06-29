<template>
  <main>
    <menu class="menu">
      <StartpageMenuItem v-for="(item, index) in displayImages" :key="item.slug || index" :item="item" :index="index" />
    </menu>

    <section>
      <h2>About</h2>
      <p>Hi! <br /> <br />
        I fall in love with places that are free and open

      </p>
    </section>
  </main>
</template>

<script lang="ts" setup>
import type { CategoryImage } from '~~/models/Images';

const displayImages: Ref<CategoryImage[]> = await useRandomImages();
const slugOrder = ['art', 'taddozz', 'photo', '3d'];

displayImages.value.sort((a, b) => {
  let indexA = slugOrder.indexOf(a.slug);
  let indexB = slugOrder.indexOf(b.slug);

  if (indexA === -1) indexA = Infinity;
  if (indexB === -1) indexB = Infinity;

  return indexA - indexB;
});
</script>

<style lang="scss" scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: auto;
  margin: 50px;
}
</style>