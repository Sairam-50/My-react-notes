import { recipes } from "./data.js";

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2> {recipe.name} </h2>
          <ul>
            {recipe.ingredients.map((ingredinet) => (
              <li key={ingredinet}> {ingredinet}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
