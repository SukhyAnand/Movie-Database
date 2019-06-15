import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims: any;
  movies: any[];
  selectedFilterCategory: string;
  title: string = 'VIEW MOVIES';
  nameFilter: string = "";
  filterCategories: string[] = ["Title", "Description", "Rating", "Votes"];
  isFieldEnabled: boolean[] = [true, true, true, true];

  constructor(private router: Router, private _movieService: MoviesService) { }

  ngOnInit() {
    
    this.userClaims = JSON.parse(localStorage.getItem('userToken'));
    this.movies = this._movieService.getMovies();
    this.selectedFilterCategory = this.filterCategories[0];
  }

  deleteMovie(id: any) {
    this._movieService.deleteMovie(id);
    this.movies = this._movieService.getMovies();
    localStorage.removeItem(this.userClaims.UserName + id.toString());
  }

  setFilterCategory(e) {
    this.selectedFilterCategory = e.target.value;
  }

  toggleEnabledField(e) {
    var isEnabled: boolean = e.target.checked ? true : false;
    if (e.target.value == "Title") {
      this.isFieldEnabled[0] = isEnabled;
    } else if (e.target.value == "Description") {
      this.isFieldEnabled[1] = isEnabled;
    } else if (e.target.value == "Rating") {
      this.isFieldEnabled[2] = isEnabled;
    } else if (e.target.value == "Votes") {
      this.isFieldEnabled[3] = isEnabled;
    }
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}