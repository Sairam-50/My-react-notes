import { recipes } from "./data.js";

function Recipe({ name, id, ingredients }) {
  return (
    <div>
      <h2> {name} </h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
    return(
        <div>
            <h1>Recipes</h1>
            <Recipe {...recipes} key={recipes.id} />
        </div>
    )
}
