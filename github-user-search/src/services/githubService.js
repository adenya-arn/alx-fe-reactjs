import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
const BASE_URL = "https://api.github.com/search/users?q";

// Function to fetch GitHub users with filters
const fetchUserData = async (username, location, minRepos) => {
  try {
    let query = "";

    if (username) {
      query += `${username} in:login `;
    }
    if (location) {
      query += `location:${location} `;
    }
    if (minRepos) {
      query += `repos:>${minRepos} `;
    }

    if (!query) {
      console.warn("No query provided");
      return [];
    }

    const response = await axios.get(`${BASE_URL}?${query.trim()}`, {
      headers: { Authorization: `token ${token}` },
    });

    return response.data.items || [];
  } catch (error) {
    console.error("Error searching users:", error);
    return [];
  }
};

export default fetchUserData;
