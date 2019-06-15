import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName,password) {
    let accessToken = this.userService.userAuthentication(userName,password);
    if (accessToken == null) {
      this.isLoginError = true;
    } else {
      localStorage.setItem('userToken', JSON.stringify(accessToken));
      this.router.navigate(['/home']);
    }
  }
}
