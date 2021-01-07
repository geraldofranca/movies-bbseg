import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie/movie.service';
import { Movie } from '../movie/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {

  }

  pesquisar(obj: string) {
    if (obj.length > 2) {
      this.movieService.searchMovies(obj).subscribe(resp => {
        console.log(resp)
        this.movies = resp.results
        this.movies.map(movie => movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`)
      })
    }
  }

}
