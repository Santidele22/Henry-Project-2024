import { getMovies, getTitles } from "./movies.services.js";
import { CardTemplate } from "./movies.template.js";

const cardContainer = document.querySelector(".movies-container");
const cardByGenreContainer = document.querySelector(".movies-by-genre");




function renderCard() {
	const cards = getMovies();
	cards.forEach((card) => {
		const cardTemplateHTML = CardTemplate(card.title, card.poster);
		const tempDiv = document.createElement("div");
		tempDiv.innerHTML = cardTemplateHTML;

		cardContainer.appendChild(tempDiv.firstElementChild);
	});
}
renderCard();

function renderMoviesByGenre() {
	const cards = getMovies();
	const titles = getTitles()
	titles.forEach((title) => {
		const titleElement = document.createElement("h3")
		const divContainer = document.createElement("div")
		divContainer.setAttribute("class", "movies-container")

		titleElement.textContent = title
		
		cardByGenreContainer.appendChild(titleElement)
		cardByGenreContainer.appendChild(divContainer)

		cards.forEach(e => {
			if(e.genre.includes(title)){
				const cardTemplateHTML = CardTemplate(e.title, e.poster);
				const tempDiv = document.createElement("div");
				tempDiv.innerHTML = cardTemplateHTML;
		
				divContainer.appendChild(tempDiv.firstElementChild);
			}else{
				return
			}
		})


	});
}
renderMoviesByGenre();
