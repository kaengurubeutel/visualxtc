<script setup lang="ts">
/**query Overview {
  projectCategoryPages {
    id
    locale
    categoryTitle
    projects {
      ... on Project {
        id
        images {
          id
        }
      }
    }
  }
} */

useHead({
  meta: [
    { name: 'robots', content: 'noimageindex' }
  ]
})

</script>




<template>
  <div>
    <NuxtRouteAnnouncer />
    <main class="site-content">
      <NuxtPage />
    </main>
  </div>
</template>
