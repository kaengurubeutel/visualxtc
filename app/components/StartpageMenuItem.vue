<template>
  <NuxtLink :to="`/work/${item.slug}`" :class="['menu-item', `item-${index}`, { 'is-loading': !imageLoaded }]">

    <div class="image-wrapper" :style="{ '--mask-url': `url('/masks/mask_${index}.svg')` }">
      <img ref="imageRef" :src="item.imageUrl" :alt="item.altText || 'Visual Space Item'" class="main-image"
        @load="onImageLoad">
    </div>

    <img v-if="imageLoaded" :src="`/menudescr/menue${index}.svg`" :alt="item.slug || 'description'" class="desc-overlay"
      :style="overlayStyle">
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue';
import type { CategoryImage } from '~~/models/Images';

const props = defineProps({
  item: { type: Object as () => CategoryImage, required: true },
  index: { type: Number, required: true }
});

const imageLoaded = ref(false);
const imageRef = ref<HTMLImageElement | null>(null);

const onImageLoad = () => {
  imageLoaded.value = true;
};

onMounted(() => {
  if (imageRef.value && imageRef.value.complete) {
    imageLoaded.value = true;
  }
});

const offsets = [
  { x: '-48%', y: '-83%', scale: 0.7 },
  { x: '-35%', y: '-72%', scale: 0.7 },
  { x: '-57%', y: '-30%', scale: 0.83 },
  { x: '-25%', y: '-22%', scale: 0.55 }
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

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg,
          #111111 25%,
          #222222 50%,
          #111111 75%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite linear;
      opacity: 1;
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    .main-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      filter: brightness(1);
      opacity: 0;
      transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), filter 0.4s ease, opacity 0.4s ease;
      position: relative;
      z-index: 2;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ececec;
      mix-blend-mode: multiply;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 3;
    }
  }

  &:not(.is-loading) {
    .image-wrapper::before {
      opacity: 0;
    }

    .main-image {
      opacity: 1;
    }
  }

  &:hover:not(.is-loading) {
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
    animation: fadeIn 0.4s ease forwards;
  }
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>