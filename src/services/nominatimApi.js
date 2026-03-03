import axios from "axios";

const nominatimApi = axios.create({
  baseURL: "/geo",
});

export const rechercherVille = (query) =>
  nominatimApi.get("/search", {
    params: {
      q: query,
      format: "jsonv2",
      addressdetails: 1,
      limit: 10,
    },

    
  });

export const rechercherRestaurants = async (villeSelectionnee) => {
  if (!villeSelectionnee?.boundingbox) return [];
  const [sud, nord, ouest, est] = villeSelectionnee.boundingbox;
  const viewbox = `${ouest},${sud},${est},${nord}`;
  const response = await nominatimApi.get("/search", {
    params: {
      q: "McDonald's",
      format: "jsonv2",
      bounded: 1,
      viewbox: viewbox,
      limit: 10,
    },
  });

  return response;
};


export default nominatimApi;
