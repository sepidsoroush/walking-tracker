import axios from "axios";
import { EXPO_PUBLIC_BASE_URL } from "@env";

export default axios.create({
  baseURL: EXPO_PUBLIC_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
