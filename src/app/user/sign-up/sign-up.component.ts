import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: '',
      IsAdmin: false,
    }
  }

  OnSubmit(form: NgForm){
    console.log("Form Value = " + JSON.stringify(form.value, null, 4));
    let userCount = this.userService.getUsersCount();
    let newUser = {
          id: userCount + 1,
          UserName: form.value.UserName,
          Password: form.value.Password,
          Email: form.value.Email,
          FirstName: form.value.FirstName,
          LastName: form.value.LastName,
          IsAdmin: form.value.IsAdmin
        };
    console.log("New user added with the details : " + JSON.stringify(newUser));
    this.userService.registerUser(newUser);
    this.resetForm(form);
    this.toastr.success('User registration successful');
  }
}