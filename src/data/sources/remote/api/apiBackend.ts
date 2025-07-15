import { API_URL_BACKEND } from "@env";
import axios from "axios";

export const backendApi = axios.create({
    baseURL: API_URL_BACKEND
});
