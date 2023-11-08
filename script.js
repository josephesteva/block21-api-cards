console.log(`hi`);

const state = {
	recipes: []
}

const main = document.querySelector(`main`);

const getRecipes = async () => {
	try {
		const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes`);
		const recipesJSON = await response.json();
		state.recipes = recipesJSON.data;
		
		renderAllRecipes(state.recipes);
	} catch {
		main.innerText = `Error. Try again later.`
	}
} 

const renderAllRecipes = (recipesArray) => {
	// const h2 = document.createElement(`h2`);
	// h2.innerText = `Potential Recipes`;
	// main.appendChild(h2);
	main.innerHTML= ``;
	recipesArray.forEach(recipe => {
		const section = document.createElement(`section`);
		section.style = `display: flex; align-items: center; flex-direction: column; width: 350px; height: 300px; border: solid black 3px; margin: 10px`
		section.id = `${recipe.id}`
		section.innerHTML = `
		<h3>${recipe.name}</h3>
		<img src="${recipe.imageUrl}" alt="${recipe.name}" style="width: 300px; height: 225px"/>
		`
		main.appendChild(section);

		section.addEventListener(`click`, () => {
			renderSingleRecipe(section.id);
		})
	
	});
}

const renderSingleRecipe = async (recipeID) => {
	try {
		const recipeObject = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/recipes/${recipeID}`);
		const recipeJSON = await recipeObject.json();
		const singleRecipe = recipeJSON.data
		// console.log(singleRecipe);
		
		main.innerHTML = `
		<section style="display: flex; justify-content: space-between; align-items: center; flex-direction: column; width: 350px; height: 300px; border: solid black 3px; padding: 0 20px; margin: 10px">
		<h2>${singleRecipe.name} Description</h2>
		<p>${singleRecipe.description}<p>
		
		<button>Back to Recipe List</button>
		</section>
		`
	} catch {
		main.innerHTML = `<p>Error. Try again later. <p>
		<button style="margin: 0px 20px">Click here to return to main recipe page</button>
		`
	} 
	const button = document.querySelector(`button`);
	button.addEventListener(`click`, () => {
		getRecipes();
	})
}


getRecipes();