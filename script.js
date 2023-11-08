console.log(`hi`);

const state = {
	recipes: []
}

const main = document.querySelector(`main`);

const getRecipes = async () => {
	const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes`);
	const recipesJSON = await response.json();
	state.recipes = recipesJSON.data;
	console.log(state.recipes);

	renderAllRecipes(state.recipes);
} 

const renderAllRecipes = (recipesArray) => {
	// const h2 = document.createElement(`h2`);
	// h2.innerText = `Potential Recipes`;
	// main.appendChild(h2);
	recipesArray.forEach(recipe => {
		const section = document.createElement(`section`);
		section.style = `display: flex; align-items: center; flex-direction: column; width: 350px; height: 300px; border: solid black 3px; margin: 10px`
		section.innerHTML = `
		<h3>${recipe.name}</h3>
		<img src="${recipe.imageUrl}" alt="${recipe.name}" style="width: 300px; height: 225px"/>
		`
		main.appendChild(section);

		// section.addEventListener(`click`, () => {
		// 	renderSingleRecipe();
		// })
	
	});
}

// const renderSingleRecipe = async () => {
	
// 	main.innerHTML = `
	
// 	`
// }


getRecipes();