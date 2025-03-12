import axios from "axios";

const API_KEY : string = `RzRF_k3h3BHq7AA1GQviSXEOi7T7iYwqCSZySegP0Vw`;
const API_LINK : string = `https://api.unsplash.com/search/photos?`;

export const fetchImages = async <T extends object> (search : string, page : number) : Promise<T> => {
  const response = await axios.get<T>(
    `${API_LINK}client_id=${API_KEY}&query=${search}&page=${page}&per_page=15`
  );

  return response.data;
};
