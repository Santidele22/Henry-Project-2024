import MoviesData from "./movies.data.js";

function getMovies() {
	try {
		const movies = MoviesData.map((movie) => movie);
		if (!movies) {
			return;
		}
		return movies;
	} catch (error) {
		throw new error(error);
	}
}
 function filterMoviesByGenre(genre){
  try {
      const movie = MoviesData.filter(card => card.genre === genre)
      if(!movie){
        return
      }
      return movie
  } catch (error) {
    throw new Error(error)
  }
}
 function deleteMovie() {}
export {
    deleteMovie, filterMoviesByGenre, getMovies
};

