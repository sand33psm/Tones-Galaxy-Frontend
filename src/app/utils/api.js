import axios from 'axios';

// Create an instance of Axios
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to fetch ringtones
export const fetchRingtones = async () => {
  try {
    const response = await apiClient.get("api/v1/ringtones/");
    console.log(response);
    
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