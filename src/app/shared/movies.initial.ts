export class MoviesInit {
   load() {
    if (localStorage.getItem('movies') == null || localStorage.getItem('movies') == undefined) {
      console.log("Creating the initial set of users ...");
      var movies = [
        {
          id: 1,
          Title: "The Shawshank Redemption",
          Description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          Rating: 9.3,
          Votes: 2100647,
          Comments: {
            "Sukhy": "One of the bests!",
          }
        },
        {
          id: 2,
          Title: "The Godfather",
          Description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          Rating: 9.2,
          Votes: 1442048,
          Comments: {
            "Sukhy": "Amazing Movie!",
          }
        },
        {
          id: 3,
          Title: "The Dark Knight",
          Description: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          Rating: 9.0,
          Votes: 2066935,
          Comments: {
            "Sukhy": "Superb!",
          }
        }
      ];
      localStorage.setItem('movies', JSON.stringify(movies));
    } else {
      console.log("Loaded the movies from local storage ...");
    }
  }
}