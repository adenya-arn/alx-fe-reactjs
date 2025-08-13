import { use } from "react";
import useRecipeStore from "../store/recipeStore";

const FavoriteButton = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() =>
        isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)
      }
    >
      {isFavorite ? "★ Remove Favorite" : "☆ Add to Favorites"}
    </button>
  );
};

export default FavoriteButton;
