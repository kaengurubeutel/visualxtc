<script lang="ts" setup>
import { computed } from 'vue';
import type { CategoryImage } from '~~/models/Images';


const displayImages = await useRandomImages();
const slugOrder = ['art', 'taddozz', 'photo', '3d'];


const { exhibitions } = await useExhibitions();


const sortedImages = computed(() => {
  if (!displayImages?.value) return [];

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

  <div class="scroll-container">


    <div class="fullscreen-sec">

      <ClientOnly>

        <div class="menu">
          <StartpageMenuItem v-for="(item, index) in sortedImages" :key="item.slug || index" :item="item"
            :index="index" />
        </div>

        <template #fallback>
          <div class="menu-fallback">Loading Menu...</div>
        </template>
      </ClientOnly>
    </div>

    <!-- Zweite Sektion: About -->
    <div class="fullscreen-sec">
      <section class="about-section">
        <h1>ABOUT</h1>
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

    <!-- Dritte Sektion: Exhibitions -->
    <div class="fullscreen-sec">
      <h2>EXHIBITIONS</h2>

      <section v-for="(item, index) in exhibitions" :key="index" class="exhibition-section">
        <div class="exhibiton-left">
          <!-- Optional Chaining (?.) eingebaut und den Tippfehler korrigiert (date[1] statt zweimal date[0]) -->
          <h3>{{ item.date?.[0] || '' }} - {{ item.date?.[1] || '' }}</h3>
          <h2 class="location-text">{{ item.location }}</h2>
        </div>

        <div class="exhibition-right">
          <h2>{{ item.exhibitionTitle }}</h2>
          <p class="description-text">{{ item.description }}</p>
        </div>
      </section>
    </div>

    <!-- Vierte Sektion: Contact -->
    <div class="fullscreen-sec">
      <section class="about-section">
        <h2>CONTACT</h2>
        <p>
          mail me for any business inquiries: <br />
          hello@by-terry.de
          ‍<br /><br />
          Follow me on instagram:<br /><br />
          Art and Taddoozz: @InkEverywhere-byTerry<br />
          Photography: @Photos-byTerry
          <br /><br />
          You like what you are seeing?
          I'm open for commissions and even collaborations for photography, art and design. Hmu with your idea!
          <br /><br />
          Looking forward to hear from you!<br /><br />
          -Terry
        </p>
      </section>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: none;
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

.menu-fallback {
  color: #25432F;
  font-family: Syne, sans-serif;
}

.fullscreen-sec {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 60px);
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 40px;
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

.exhibition-section {
  display: flex;
  flex-direction: row;
  gap: 50px;

  h2,
  h3 {
    font-family: Syne, sans-serif;
    font-weight: 600;
    color: #25432F;
    font-size: 1.2em;
  }

  h3 {
    font-size: 0.9em;
    color: #36513f;
  }

  .location-text,
  .description-text {
    white-space: pre-line;
  }

  .exhibition-right {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>