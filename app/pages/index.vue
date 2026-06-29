<template>
  <main>
    <menu class="menu">
      <div v-for="(item, key) in displayImages" :key="key" class="menu-item">
        <img :src="item.imageUrl" :alt="item.altText">
      </div>
    </menu>
    <section>
      <h2>About</h2>
      <p>Hi! <br /> <br />
        I fall in love with places that are free and open, with storys that show passion and courage, with people
        thinking outside the box who make me wanna believe in this world, with movements that change it for the better.
        Noone is free until we all are free.
        <br />
        This right here is my visual journey in this world.
        A journey as a self-taught young artist by heart, studied graphic designer and photographer based in Germany.
        I‘m currently in training to become a tattoo artist as well.
        My artstyle is abstract, organic, symmetric and often trippy. I hope you'll find inspiration here.Feel invited
        to dive deep into my creative space, feel some VISUAL XTC! :)
        <br /><br />
        -Terry
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
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 600px;

  .menu-item {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      display: block;
    }
  }
}
</style>