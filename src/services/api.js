import axios from "axios";

export const key = "c30e3f19dfe48eb25f0201aacf01e1659c4b87e1";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4/",
  headers: {
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  },
});

export default api;
