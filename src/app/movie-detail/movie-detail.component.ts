import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie/movie.model';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.movieService.getMovieDetails(this.route.snapshot.params['id'])
      .subscribe(resp => {
        this.movie = resp
        this.movie.poster_path = `http://image.tmdb.org/t/p/w300${this.movie.poster_path}`
      });
  }

}
