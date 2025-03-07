import axios from "axios";

const API_KEY = `RzRF_k3h3BHq7AA1GQviSXEOi7T7iYwqCSZySegP0Vw`;
const API_LINK = `https://api.unsplash.com/search/photos?`;

export const fetchImages = async (search, page) => {
  const response = await axios.get(
    `${API_LINK}client_id=${API_KEY}&query=${search}&page=${page}&per_page=15`
  );

  return response.data.results;
};
