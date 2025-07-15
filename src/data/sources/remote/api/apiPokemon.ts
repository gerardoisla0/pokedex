import { API_URL_POKEAPI } from "@env";
import axios from "axios";

export const pokeApi = axios.create({
    baseURL: API_URL_POKEAPI
});
