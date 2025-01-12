import { apiClient } from '../utils/api'

// Function to fetch ringtones
export const fetchRingtones = async (page = 1) => {
  try {
    const response = await apiClient.get(`api/v1/ringtones/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ringtones:', error);
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