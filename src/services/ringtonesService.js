import { apiClient } from '../utils/api'

// Function to fetch ringtones
export const fetchRingtones = async () => {
    try {
      const response = await apiClient.get("api/v1/ringtones/");
      console.log("Res =>",response.data);
      
      return response.data;
    } catch (error) {
      console.error("Error fetching ringtones:", error);
      throw error;
    }
  };
  
  
  // Function to fetch individual ringtone
  
  export const fetchRingtone = async (ringtoneId) => {
    try {
      const response = await apiClient.get(`api/v1/ringtones/${ringtoneId}/`);
      console.log(response);
      
      return response.data;
    } catch (error) {
      console.error("Error fetching ringtones:", error);
      throw error;
    }
  };