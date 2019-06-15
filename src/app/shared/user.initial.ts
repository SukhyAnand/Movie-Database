export class UserInit {
  load() {
    if (localStorage.getItem('users') === null || localStorage.getItem('users') == undefined) {
      console.log("Creating the initial set of users ...");
      var users = [
        {
          id: 1,
          UserName: "Sukhy",
          Password: "12345",
          Email: "sukhpreet.singhanand@gmail.com",
          FirstName: "Sukhpreet",
          LastName: "Anand",
          IsAdmin: true,
        }
      ];
      localStorage.setItem('users', JSON.stringify(users));
    }
    else {
      console.log("Loaded the users from local storage ...");
    }
  }
}
