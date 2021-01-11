import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie/movie.model';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-newmovie',
  templateUrl: './newmovie.component.html',
  styleUrls: ['./newmovie.component.scss']
})
export class NewmovieComponent implements OnInit {

  movies: Movie[]

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getPopularMovies().subscribe(resp => {
      this.movies = resp.results
      this.movies.map(movie => movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`)
      this.movies.splice(4, 16);
    })
  }

}
