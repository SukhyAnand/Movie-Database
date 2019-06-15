import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'addmovie-form',
  templateUrl: './addmovie-form.component.html'
})
export class AddMovieFormComponent {
  ratings: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  title: string = 'ADD MOVIE';

  constructor(private _movieService: MoviesService, private router: Router, private location: Location) { }

  goBack(): void {
    this.router.navigate(['home']);
  }

  onSubmit(formValue: any){
    console.log("Form Value = " + JSON.stringify(formValue, null, 4));
    let movieCount = this._movieService.getMovieCount();
    let newMovie = {
          id: movieCount + 1,
          Title: formValue.Title,
          Description: formValue.Description,
          Rating: parseInt(formValue.Ratings),
          Votes: 1,
          Comments: {},
        };
    this._movieService.addMovie(newMovie);
    this.router.navigate(['home']);
  }
}