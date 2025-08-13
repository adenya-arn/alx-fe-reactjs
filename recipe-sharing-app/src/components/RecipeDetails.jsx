import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

export default function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipeId = Number(id);

  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Local edit state
  const [title, setTitle] = useState(recipe?.title || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [isEditing, setIsEditing] = useState(false);

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/"); // go back to list
  };

  const handleUpdate = () => {
    updateRecipe(recipeId, { title, description });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <h1>Edit Recipe</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
}
