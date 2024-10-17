export function CardTemplate(title, poster) {
	return `
	 <article class="movie">
		<figure>
		<img src=${poster} alt=${title}/>
		</figure>
      </article> 
      `;
}

