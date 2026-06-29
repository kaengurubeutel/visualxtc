<template>
  <main>

    <menu class="menu">
      <div v-for="(item, index) in displayImages" :key="index" :class="['menu-item', `item-${index}`]">

        <div class="image-wrapper" :style="{ '--mask-url': `url('/masks/mask_${index}.svg')` }">
          <img :src="item.imageUrl" :alt="item.altText" class="main-image">
        </div>
        <img :src="`/menudescr/menue${index}.svg`" :alt="item.slug || 'description'" class="desc-overlay">
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
  gap: 10px;
  width: auto;
  margin: 50px;

  .menu-item {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;


    .image-wrapper {
      width: 100%;
      height: 100%;
      background-color: #fff;

      mask-image: var(--mask-url);
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-image: var(--mask-url);
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;

      .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        filter: brightness(1);
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease;
      }

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #00ff66;
        mix-blend-mode: multiply;
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
      }
    }


    &:hover {
      .main-image {
        transform: scale(1.1);
      }

      .image-wrapper::after {
        opacity: 1;
      }
    }




    .desc-overlay {
      position: absolute;
      pointer-events: none;
      object-fit: contain;
      z-index: 10;

      top: 50%;
      left: 50%;
      width: 130%;
      height: 130%;
      transform: translate(-50%, -50%);
    }



    &.item-0 {

      // Oben Links (ART)
      .desc-overlay {
        transform: translate(-48%, -83%) scale(0.7);
      }
    }

    &.item-1 {

      // Oben Rechts (TAPDOOZZ)
      .desc-overlay {
        transform: translate(-35%, -72%) scale(0.7);
      }
    }

    &.item-2 {

      // Unten Links (PHOTOGRAPHY)
      .desc-overlay {
        transform: translate(-57%, -30%) scale(0.83);
      }
    }

    &.item-3 {

      // Unten Rechts (3D)
      .desc-overlay {
        transform: translate(-25%, -22%) scale(0.55);
      }
    }
  }
}
</style>