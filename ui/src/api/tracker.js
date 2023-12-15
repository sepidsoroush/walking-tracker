import axios from "axios";

const baseUrl = process.env.EXPO_PUBLIC_BASE_URL;

export default axios.create({
  baseURL: baseUrl,
});
