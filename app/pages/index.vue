<script lang="ts" setup>
import type { CategoryImage } from '~~/models/Images';

const displayImages: Ref<CategoryImage[]> = await useRandomImages();
const slugOrder = ['art', 'taddozz', 'photo', '3d']; // Direkt dein korrigiertes Doppel-O mitgenommen!

displayImages.value.sort((a, b) => {
  let indexA = slugOrder.indexOf(a.slug);
  let indexB = slugOrder.indexOf(b.slug);

  if (indexA === -1) indexA = Infinity;
  if (indexB === -1) indexB = Infinity;

  return indexA - indexB;
});
</script>

<template>
  <div id="site-wrapper">
    <div class="side-column">
      <img src="/bogen/BogenL.svg" alt="deco left" aria-hidden="true" class="bow">
    </div>

    <!-- Mittleres Drittel: Der unendlich scrollbare Main-Tunnel -->
    <main class="scroll-container">

      <!-- BLOCK 1: Das Menü (nimmt 100vh ein, Inhalt perfekt gecentered) -->
      <div class="fullscreen-content-wrapper">
        <menu class="menu">
          <StartpageMenuItem v-for="(item, index) in displayImages" :key="item.slug || index" :item="item"
            :index="index" />
        </menu>
      </div>

      <!-- BLOCK 2: Der About-Text (nimmt ebenfalls 100vh ein, Inhalt perfekt gecentered) -->
      <div class="fullscreen-content-wrapper">
        <section class="about-section">
          <h2>ABOUT</h2>
          <p>Hi! <br /> <br />
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
            <br /> <br />
            -Terry
          </p>
        </section>
      </div>

    </main>

    <!-- Rechtes Drittel: Der rechte Bogen -->
    <div class="side-column">
      <img src="/bogen/BogenR.svg" alt="deco right" aria-hidden="true" class="bow">
    </div>
  </div>
</template>

<style lang="scss" scoped>
#site-wrapper {
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  width: 100vw;
  height: 100vh;
  overflow: hidden; // Verhindert das globale Scrollen der äußeren Säulen
}

// Die beiden äußeren Säulen für die Bögen (starr, unbeweglich)
.side-column {

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

// Der mittlere Bereich (die Spalte an sich scrollt, bleibt aber an Ort und Stelle)
.scroll-container {
  width: 100%;
  height: 100vh;
  overflow-y: auto; // Ermöglicht das Scrollen durch die inneren Blöcke

  // Blendgitter für die Browser-Scrollbar
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

// Die Wrapper-Divs, die du wolltest: Jedes füllt die Spalte voll aus (100vh)
// und zentriert seinen Inhalt (Menü oder Text) radikal in der Mitte.
.fullscreen-content-wrapper {
  width: 100%;
  height: 100vh; // Nimmt immer exakt die volle Bildschirmhöhe ein
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px; // Kleiner Seitenschutz für Inhalte
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
  gap: 10px;
  width: 70%; // Nutzt die 33.33vw der mittleren Spalte voll aus
}

.about-section {
  width: 100%;
  text-align: center;

  h2 {
    font-family: 'Heal The Web', sans-serif;
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }
}
</style>