import api from "./apiConfig";
export const createAstro = async (astroData) => {
    try {
      const response = await api.post("/newApod", astroData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };