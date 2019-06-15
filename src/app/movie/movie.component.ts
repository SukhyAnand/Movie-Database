import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";
import { MoviesService } from '../shared/movies.service';
export interface Message {
    ratings: string;
    comment: string;
}

@Component({
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    id: any;
    movie: any;
    userClaims: any;
    ratings: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    userComment = [];
    canReview : boolean;
    title: string = 'MOVIE DETAILS';
    
    constructor(private _movieService: MoviesService, private router: Router, private route: ActivatedRoute, private location: Location) {
    }

    @Output() onSendMessage: EventEmitter<Message> = new EventEmitter();
    message = {
        ratings: '1',
        comment: '',
    };

    ngOnInit(): void {
        this.userClaims = JSON.parse(localStorage.getItem('userToken'));
        this.route.params.forEach((params: Params) => {
            this.id = +params['id'];
        });
        this.movie = this._movieService.getMovie(this.id);
        if (localStorage.getItem(this.userClaims.UserName + this.movie.id.toString()) === null || 
            localStorage.getItem(this.userClaims.UserName + this.movie.id.toString()) == undefined) {
            this.canReview = true;
        } else {
            this.canReview = false;
        }
        for (var key in this.movie.Comments){
            var attrName = key;
            var attrValue = this.movie.Comments[key];
            this.userComment.push({key:attrName, value:attrValue});
        }
    }

    sendMessage() {
        if (this.message.comment !== '') {
            console.log("Message and rating: " + this.message.comment + " " + this.message.ratings);
            this.movie.Comments[this.userClaims.UserName] = this.message.comment;
        }
        let updatedMovie = {
            id: this.movie.id,
            Title: this.movie.Title,
            Description: this.movie.Description,
            Rating: (parseFloat(this.message.ratings) + (this.movie.Rating * this.movie.Votes))/(this.movie.Votes + 1),
            Votes: this.movie.Votes + 1,
            Comments: this.movie.Comments
        };       
        this._movieService.updateMovie(updatedMovie);
        localStorage.setItem(this.userClaims.UserName + this.movie.id.toString(), 'true');
        window.location.reload();
      }

    goBack(): void {
        this.router.navigate(['home']);
    }
}