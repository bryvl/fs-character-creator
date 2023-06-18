import axios from "axios";

const url = "http://localhost:3000/characters";

export default {
  getAllCharacters() {
    return axios.get(url);
  },
  // Fetch only the characters associated with the logged-in user
  getUserCharacters(userId) {
    return axios.get(`${url}?userId=${userId}`);
  },
  createCharacter(character, userId) {
    return axios.post(`${url}?userId=${userId}`, character);
  },
  deleteCharacter(id) {
    return axios.delete(`${url}/${id}`);
  },
};
