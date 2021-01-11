import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/movie/movie.model';
import { MovieService } from 'src/app/movie/movie.service';

@Component({
  selector: 'app-similar-movie',
  templateUrl: './similar-movie.component.html',
  styleUrls: ['./similar-movie.component.scss']
})
export class SimilarMovieComponent implements OnInit {

  similar: Movie[];

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movieService.getSimilarMovies(this.route.snapshot.params['id'])
      .subscribe(resp => {
        this.similar = resp.results
        this.similar.map(item => item.poster_path = `http://image.tmdb.org/t/p/w300${item.poster_path}`)
        this.similar.splice(8, 12);
      });
  }

}
