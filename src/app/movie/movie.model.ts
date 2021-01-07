export interface ReturnQueryMovies {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Movie {
  id: number
  original_title: string
  overview: string
  poster_path: string
  title: string
  release_date: Date
  original_language?: string
  runtime?: number
  genres?: Genres[]
}

export interface Genres {
  name: string
}
