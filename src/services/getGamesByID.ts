import api from "services/api";
const apiKey = process.env.REACT_APP_API_KEY;

export async function getGamesByID(id: number) {
  const response = await api.get(`/games/${id}?key=${apiKey}`);
  return response.data;
}
