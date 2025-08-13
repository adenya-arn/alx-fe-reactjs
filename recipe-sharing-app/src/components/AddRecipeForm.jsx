import { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /> <br />
      <textarea
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br /> <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
