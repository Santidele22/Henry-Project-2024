import { getMovies } from "./movies.services.js";
import { CardTemplate } from "./movies.template.js";

const cardContainer = document.querySelector(".movies-container");
const cardByGenreContainer = document.querySelector(".movies-by-genre")




function renderCard() {
	const cards = getMovies();
	cards.map((card) => {
		console.log(card.title, card.poster)
		const cardTemplate = CardTemplate(card.title, card.poster);
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = cardTemplate;

		cardContainer.appendChild(tempDiv.firstElementChild);
	});
}
renderCard();


function renderMoviesByGenre(){
  const cards = getMovies()
  cards.map((card) => {
		
	});
}



