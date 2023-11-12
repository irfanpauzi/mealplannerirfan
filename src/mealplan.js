const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

// MealDB API endpoint
const MEALDB_API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  try {
    const response = await fetch(`${MEALDB_API}${searchQuery}`);
    const data = await response.json();
    generateHTML(data.meals);
    console.log(data);
  } catch (error) {
    console.error("Error fetching data from MealDB API:", error);
  }
}

function generateHTML(meals) {
  container.classList.remove("initial");
  let generatedHTML = "";
  meals.forEach((meal) => {
    generatedHTML += `
          <div class="item">
        <img src="${meal.strMealThumb}" alt="Meal Image">
        <div class="flex-container">
          <h1 class="title">${meal.strMeal}</h1>
          <a class="view-btn" target="_blank" href="https://www.themealdb.com/meal/${meal.idMeal}">View Recipe</a>
        </div>
        <p class="item-data">Category: ${meal.strCategory}</p>
        <p class="item-data">Area: ${meal.strArea}</p>
        <p class="item-data">Source: ${meal.strSource}</p>
        <p class="item-data">Ingredient: ${meal.strIngredient1},${meal.strIngredient2},${meal.strIngredient3},
        ${meal.strIngredient4},${meal.strIngredient5},${meal.strIngredient6},${meal.strIngredient7},${meal.strIngredient8}
        ,${meal.strIngredient9},${meal.strIngredient10},${meal.strIngredient11},${meal.strIngredient12},${meal.strIngredient13}</p>
        <p class="item-data">Instructions: ${meal.strInstructions}</p>
        <p class="item-data">How To Cook: ${meal.strYoutube}</p>
      </div>
    `;
  });
  searchResultDiv.innerHTML = generatedHTML;
}

    function redirectToCrud() {
      window.location.href = "crud.html";
    }