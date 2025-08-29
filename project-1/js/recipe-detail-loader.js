window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const recipeId = params.get("id");

  const recipe = recipes.find(r => r.id === recipeId);

  const container = document.getElementById("recipeDetails");

  if (!recipe) {
    container.innerHTML = `
      <h2 class='text-danger'>Recipe not found!</h2>
      <a href="recipes.html" class="btn btn-secondary mt-3">⬅ Back to Recipes</a>
    `;
    return;
  }

  container.innerHTML = `
    <h2 class="fw-bold mb-4">${recipe.name}</h2>
    <img src="${recipe.image}" alt="${recipe.name}" class="img-fluid rounded shadow mb-4" width="400" />
    <p class="lead mb-4">${recipe.description}</p>

    <h4>📝 Ingredients:</h4>
    <ul class="list-group mb-4">
      ${recipe.ingredients.map(item => `<li class="list-group-item">${item}</li>`).join("")}
    </ul>

    <h4>👨‍🍳 Steps:</h4>
    <ol class="list-group list-group-numbered mb-4">
      ${recipe.steps.map(step => `<li class="list-group-item">${step}</li>`).join("")}
    </ol>

    <a href="recipes.html" class="btn btn-primary mt-3">⬅ Back to Recipes</a>
  `;
});
