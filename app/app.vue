<template>
  <div>
    <h1>Projekt-Kategorien</h1>

    <!-- Lade-Zustand -->
    <div v-if="pending">Lädt Daten aus Hygraph...</div>

    <!-- Fehler-Zustand -->
    <div v-else-if="error" style="color: red;">
      Fehler beim Laden: {{ error.message }}
    </div>

    <!-- Daten-Anzeige -->
    <ul v-else>
      <li v-for="page in data?.projectCategoryPages" :key="page.id">
        <strong>{{ page.categoryTitle }}</strong> ({{ page.locale }})

        <!-- Schleife durch die verschachtelten Projekte -->
        <ul>
          <li v-for="project in page.projects" :key="project.id">
            Projekt-ID: {{ project.id }}
            <span>({{ project.images?.length || 0 }} Bilder)</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 1. Deine exakte GraphQL-Query definieren
const OVERVIEW_QUERY = gql`
  query Overview {
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
  }
`

// 2. Die Anfrage mit Nuxt-Apollo ausführen
// useAsyncQuery sorgt dafür, dass die Daten fix auf dem Server (SSR) geladen werden
const { data, pending, error } = await useAsyncQuery<{
  projectCategoryPages: Array<{
    id: string
    locale: string
    categoryTitle: string
    projects: Array<{
      id: string
      images: Array<{ id: string }>
    }>
  }>
}>(OVERVIEW_QUERY)

// 3. Ein kurzer Log für deine Browser-Konsole (F12) zur Kontrolle
watchEffect(() => {
  if (data.value) {
    console.log("Hygraph Daten erfolgreich geladen:", data.value.projectCategoryPages)
  }
})
</script>