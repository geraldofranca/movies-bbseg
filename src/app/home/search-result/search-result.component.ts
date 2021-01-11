import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie/movie.model';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  search = '';
  movies: Movie[]

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.searchMovies("batman").subscribe(resp => {
      this.movies = resp.results
      this.movies.map(movie => movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`)
      this.movies.splice(8, 12);
    })
  }

  handleSearch(search: string) {
    this.search = search;
  }

}
