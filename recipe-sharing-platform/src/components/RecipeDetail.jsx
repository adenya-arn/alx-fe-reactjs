import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selected = data.find(r.id.toString() === id);
        setRecipe(selected);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading recipe ...</p>;

  return (
    <div className="max-w-3xl ma-auto p-6 bg-white rounded-2xl shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-72 object-cover rounded-xl"
      />

      <h1 className="mt-6 text-3xl font-bold">{recipe.title}</h1>
      <h2 className="mt-6 text-xl font-semibold">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="mt-6 text-xl font-semibold">Instructions</h2>
      <ol className="list-decimal pl-6 mt-2 space-y-2">
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <Link
        to="/"
        className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetails;
