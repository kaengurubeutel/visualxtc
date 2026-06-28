import type { Ref } from 'vue'
import type { CategoryImage } from '../../models/Images';

interface HygraphResponse {
  projectCategoryPages: Array<{
    slug: string
    id: string
    locale: string
    categoryTitle: string
    projects: Array<{
      id: string
      images: Array<{
        id: string
        url: string
        altText: string | null
      }>
    }>
  }>
}



export async function useRandomImages(): Promise<Ref<CategoryImage[]>> {
  const OVERVIEW_QUERY = gql`
    query Overview {
      projectCategoryPages {
        slug
        id
        locale
        categoryTitle
        projects {
          ... on Project {
            id
            images {
              id
              url
              altText
            }
          }
        }
      }
    }
  `

  const randomImages = ref<CategoryImage[]>([])

  try {
    const { data } = await useAsyncQuery<HygraphResponse>(OVERVIEW_QUERY)

    if (data.value?.projectCategoryPages) {
      const results: CategoryImage[] = []

      for (const category of data.value.projectCategoryPages) {
        const allImages = category.projects.flatMap(project => project.images || [])
        if (allImages.length > 0) {
          const randomIndex = Math.floor(Math.random() * allImages.length)
          const chosenImage = allImages[randomIndex]
          if (chosenImage) {
            results.push({
              categoryTitle: category.categoryTitle,
              slug: category.slug,
              imageUrl: chosenImage.url,
              altText: chosenImage.altText || `Portfolio Bild aus der Kategorie ${category.categoryTitle}`
            })
          }
        }
      }

      randomImages.value = results
    }
  } catch (error) {
    throw new Error('Fehler beim Laden der Zufallsbilder', { cause: error })
  }

  return randomImages
}