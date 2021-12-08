import api from "services/api";
const apiKey = process.env.REACT_APP_API_KEY;

export async function getGames(query?: string) {
  const response = await api.get(`/games?key=${apiKey}&${query}`);
  return response.data;
}
