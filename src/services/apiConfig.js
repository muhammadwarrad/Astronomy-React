import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://api-project-production-6021.up.railway.app/apod",
  development: "https://api-project-production-6021.up.railway.app/apod",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
