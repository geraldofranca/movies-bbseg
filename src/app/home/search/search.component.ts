import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../movie/movie.model';
import { MovieService } from '../../movie/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = '';
  movies: Movie[];
  router: Router;

  onSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  pesquisar(obj: string) {
    if (obj.length >= 5) {
      this.movieService.searchMovies(obj).subscribe(resp => {
        console.log(resp)
        this.movies = resp.results
        this.movies.map(movie => movie.poster_path = `http://image.tmdb.org/t/p/w300${movie.poster_path}`)
      })
    }
  }

  submit() {
    this.router.navigate
    this.router.navigate(['/movie/search-result', { movie: this.route.snapshot.paramMap.get('movie') }]);
    this.onSearch.emit(this.search)
    // return false
  }
}
