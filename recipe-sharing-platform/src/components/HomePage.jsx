import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("fetched:", recipes);
        setRecipes(data);
      })
      .catch((error) => console.log("error loading:", error));
  }, []);

  //   console.log(recipes);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow.md hover:shadow-xl transform hover:scale-105 transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.summary}</p>
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              View Recipe
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
