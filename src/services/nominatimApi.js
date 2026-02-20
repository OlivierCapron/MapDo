import axios from "axios";

const nominatimApi = axios.create({
  baseURL: "/geo",
});

export const searchCity = (query) =>
  nominatimApi.get("/search", {
    params: {
      q: query,
      format: "jsonv2",
      limit: 5,
    },
  });

export default nominatimApi;
