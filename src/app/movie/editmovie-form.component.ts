import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'editmovie-form',
  templateUrl: './editmovie-form.component.html'
})
export class EditMovieFormComponent {
    //ratings: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    constructor(private _movieService: MoviesService, private route: ActivatedRoute, private router: Router, private location: Location) { }
    id: any;
    movie: any;
    title: string = 'EDIT MOVIE';

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this.movie = this._movieService.getMovie(this.id);
    }

    goBack(): void {
        this.router.navigate(['home']);
    }

    onSubmit(formValue: any){
        console.log("Form Value = " + JSON.stringify(formValue, null, 4));
        let updatedMovie = {
            id: this.movie.id,
            Title: formValue.Title,
            Description: formValue.Description,
            Rating: this.movie.Rating,//(parseFloat(formValue.Ratings) + (this.movie.Rating * this.movie.Votes))/(this.movie.Votes + 1),
            Votes: this.movie.Votes,
            Comments: this.movie.Comments,
        };
        this._movieService.updateMovie(updatedMovie);
        this.router.navigate(['home']);
    }
}