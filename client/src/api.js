import axios from "axios";

const url = "http://localhost:3000/characters";

export default {
  getAllCharacters() {
    return axios.get(url);
  },
  createCharacter(character) {
    return axios.post(url, character);
  },
  deleteCharacter(id) {
    return axios.delete(`${url}/${id}`);
  },
};
