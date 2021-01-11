import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './home/search/search.component';
import { NewmovieComponent } from './home/newmovie/newmovie.component';
import { SearchResultComponent } from './home/search-result/search-result.component';
import { SimilarMovieComponent } from './movie-detail/similar-movie/similar-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    MovieDetailComponent,
    FooterComponent,
    SearchComponent,
    NewmovieComponent,
    SearchResultComponent,
    SimilarMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
