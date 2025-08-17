import { useState } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [results, setResults] = useState([]); // default []
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault(); // stop page reload
    setLoading(true);
    setError(null);
    setResults([]); // reset results to empty array

    try {
      const data = await fetchUserData(username, location, minRepos);
      setResults(data); // no need for .items here
    } catch (err) {
      setError("Something went wrong. Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <form
        onSubmit={handleSearch}
        className="space-y-4 p-4 bg-gray-100 rounded-lg shadow-md"
      >
        {/* Username */}
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            placeholder="Username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        {/* Minimum Repositories */}
        <div>
          <label className="block text-sm font-medium">
            Minimum Repositories
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="e.g., 10"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {/* Search Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {results.length > 0 && (
          <ul className="space-y-4">
            {results.map((user) => (
              <li
                key={user.id}
                className="flex items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="font-semibold text-lg">{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!loading && results.length === 0 && !error && (
          <p className="text-gray-500">No results yet. Try searching!</p>
        )}
      </div>
    </div>
  );
};

export default Search;
