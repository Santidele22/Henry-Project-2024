
export function CardTemplate({title, poster}){
	console.log()
	return `
	 <section class="">
		<figure>
		<img src=${poster} alt=${title}/>
		</figure>
		<h3>${title}</h3>
      </article> 
      `
	
}
