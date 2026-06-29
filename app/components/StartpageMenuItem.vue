<template>
  <NuxtLink :to="`/work/${item.slug}`" :class="['menu-item', `item-${index}`]">

    <div class="image-wrapper" :style="{ '--mask-url': `url('/masks/mask_${index}.svg')` }">
      <img :src="item.imageUrl" :alt="item.altText || 'Visual Space Item'" class="main-image">
    </div>


    <img :src="`/menudescr/menue${index}.svg`" :alt="item.slug || 'description'" class="desc-overlay"
      :style="overlayStyle">
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CategoryImage } from '~~/models/Images';

const props = defineProps({
  item: { type: Object as () => CategoryImage, required: true },
  index: { type: Number, required: true }
});


const offsets = [
  { x: '-48%', y: '-83%', scale: 0.7 },   // Index 0: ART
  { x: '-35%', y: '-72%', scale: 0.7 },   // Index 1: TAPDOOZZ
  { x: '-57%', y: '-30%', scale: 0.83 },  // Index 2: PHOTOGRAPHY
  { x: '-25%', y: '-22%', scale: 0.55 }   // Index 3: 3D
];

const overlayStyle = computed(() => {
  const config = offsets[props.index] || { x: '-50%', y: '-50%', scale: 1 };
  return {
    transform: `translate(${config.x}, ${config.y}) scale(${config.scale})`
  };
});
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: block;
  text-decoration: none;

  .image-wrapper {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;

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
  }
}
</style>