import { Injectable} from '@angular/core';
import { MoviesInit } from "./movies.initial";

@Injectable()
export class MoviesService extends MoviesInit {
  constructor() {
    super();
    console.log("Initializing Movies service ...");
    this.load();
  }

  getMovieCount() {
    let movies = JSON.parse(localStorage.getItem('movies'));
    return movies.length;
  }

  getMovies() {
    let movies = JSON.parse(localStorage.getItem('movies'));
    return movies;
  }

  getMovie(id: any) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    let movie:any = null;
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == id) {
        movie = movies[i];
        break;
      }
    }
    return movie;
  }

  addMovie(newMovie: any) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    movies.push(newMovie);
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  updateMovie(updatedMovie: any) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == updatedMovie.id) {
        movies[i] = updatedMovie;
      }
    }
    localStorage.setItem('movies', JSON.stringify(movies));
  }

  deleteMovie(id: any) {
    let movies = JSON.parse(localStorage.getItem('movies'));
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].id == id) {
        movies.splice(i, 1);
      }
    }
    localStorage.setItem('movies', JSON.stringify(movies));
  }
}
