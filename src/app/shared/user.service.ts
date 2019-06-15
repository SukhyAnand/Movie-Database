import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { UserInit } from "./user.initial";

@Injectable()
export class UserService extends UserInit {

  constructor() {
    super();
    console.log("Initializing Authentication service ...");
    this.load();
  }

  registerUser(user: any) {
    let users = JSON.parse(localStorage.getItem('users'));
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsersCount() {
    let users = JSON.parse(localStorage.getItem('users'));
    return users.length;
  }

  userAuthentication(userName, password) {
    let users = JSON.parse(localStorage.getItem('users'));
    let user: any = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].UserName == userName && users[i].Password == password) {
        user = users[i];
        break;
      }
    }
    return user;
  }
}
