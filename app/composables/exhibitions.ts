import type { Exhibition } from '../../models/Exhibitions'

interface ExhibitionResponse {
  exhibitions: Exhibition[]
}

export async function useExhibitions() {
  const EXHIBITION_QUERY = gql`
    query Exhibitions {
      exhibitions {
        exhibitionTitle
        date
        location
        description
      }
    }
  `

  try {

    const { data, error } = await useAsyncQuery<ExhibitionResponse>(EXHIBITION_QUERY)

    if (error.value) {
      throw new Error(error.value.message)
    }

    const exhibitions = computed<Exhibition[]>(() => data.value?.exhibitions || [])

    return {
      exhibitions
    }

  } catch (error) {
    console.error('Fehler beim Laden der Exhibitions:', error)
    throw new Error('Fehler beim Laden der Exhibitions', { cause: error })
  }
}