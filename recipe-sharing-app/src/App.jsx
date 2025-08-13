import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import { Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import FavoriteList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link> |{" "}
        <Link to="/favorites">Favorites</Link> |{" "}
        <Link to="/recommendations">Recommendations</Link>
      </nav>
      <SearchBar />

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/favorites" element={<FavoriteList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </Router>
  );
}

export default App;
