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
  vote_average?: number
  vote_count?: number
  popularity?: number
  runtime?: number
  backdrop_path?: string
  genres?: Genres[]
}

export interface Genres {
  name: string
}
