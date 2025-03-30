import { getMovies, getTitles } from "./movies.services.js";
import { CardTemplate } from "./movies.template.js";
import { addCardToContainer } from "./utils.js";
const cardContainer = document.querySelector(".movies-container");
const cardByGenreContainer = document.querySelector(".movies-by-genre");

function renderCard() {
	const cards = getMovies();
	cards.forEach((card) => {
		if (card) {
			addCardToContainer(cardContainer, CardTemplate(card.title, card.poster));
		} else {
			return; // skeleton
		}
	});
}
renderCard();

function renderMoviesByGenre() {
	const cards = getMovies();
	const titles = getTitles();
	//Titles = Genres
	titles.forEach((title) => {
		const titleElement = document.createElement("h3");
		const divContainer = document.createElement("div");
		divContainer.setAttribute("class", "movies-container");

		titleElement.textContent = title;

		cardByGenreContainer.appendChild(titleElement);
		cardByGenreContainer.appendChild(divContainer);

		cards.forEach((e) => {
			if (e.genre.includes(title)) {
				addCardToContainer(divContainer, CardTemplate(e.title, e.poster));
			} else {
				return; //skeleeton
			}
		});
	});
}
renderMoviesByGenre();
