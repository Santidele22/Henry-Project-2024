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

function getTitles(){
  try {
      const genres = MoviesData.map(card => card.genre)
      const titles = [...new Set(genres.flat())]
      if(!titles){
        return
      }
      return titles
  } catch (error) {
    throw new Error(error)
  }
}
 function filterMoviesByGenre(genre){
  try {
      const movie = MoviesData.filter(card => card.genre.includes(genre))
      console.log(movie)
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
  deleteMovie,
  filterMoviesByGenre,
  getMovies,
  getTitles
};

