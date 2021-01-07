import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, ReturnQueryMovies } from './movie.model';
import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) {}

  searchMovies(search: string): Observable<ReturnQueryMovies> {
    return this.httpClient
      .get<ReturnQueryMovies>(`${environment.REST_API_SERVER}/search/movie?query=${search}&api_key=${environment.API_KEY}&language=${environment.LANGUAGE}`)
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.httpClient
      .get<Movie>(`${environment.REST_API_SERVER}/movie/${id}?api_key=${environment.API_KEY}&language=${environment.LANGUAGE}`)
  }
}
