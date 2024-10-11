import MoviesData from "./movies-data.js";

function createCard() {}

async function getMovies() {
  try {
    const movies = MoviesData.map((movie) => movie);
    if (!movies) {
      return;
    }
    console.log(movies);
    return movies;
  } catch (error) {
    throw new error(error);
  }
}
