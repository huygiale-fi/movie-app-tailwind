import axios from 'axios'



const axiosClient = axios.create({
    baseURL: 'http://movieapi.cyberlearn.vn/api/',
    withCredentials: true,
    
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    
  });
  
  axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
  });
  
  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response;
      }
  
      return response;
    },
    (error) => {
      // Handle errors
      return Promise.reject(error);
    }
  );
  
  export default axiosClient;