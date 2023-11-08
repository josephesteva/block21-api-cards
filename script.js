console.log(`hi`);

const state = {
	recipes: []
}

const getRecipes = async () => {
	const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes`);
	const recipesJSON = await response.json();
	state.recipes = recipesJSON.data;
	console.log(state.recipes);

	renderAllRecipes(state.recipes);
} 

const renderAllRecipes = (recipesArray) => {
	const main = document.querySelector(`main`);
	// const h2 = document.createElement(`h2`);
	// h2.innerText = `Potential Recipes`;
	main.appendChild(h2);
	recipesArray.forEach(recipe => {
		const section = document.createElement(`section`);
		section.style = `width: 400px; height: 400px; border: solid black 3px`
		section.innerHTML = `
		<h3>Recipe</h3>
		<h4>${recipe.name}</h4>
		<img src="${recipe.imageUrl}" alt="${recipe.name}" style="width: 300px;"/>
		`
		main.appendChild(section);
	
	});
}


getRecipes();