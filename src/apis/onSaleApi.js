import axios from "axios";

const API_KEY = "63d5c2dccbc445d98efd4b090ae7a78a";

export const fetchOnSaleGames = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/games?page=1&page_size=20&key=${API_KEY}`,
  );
  return response.data.results;
};
