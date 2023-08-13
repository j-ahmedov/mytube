import axios from "axios";

const BASE_URI = 'https://youtube-v31.p.rapidapi.com'

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/captions',
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'bd9703987dmsh55b2e75ae1d18fap101db4jsne9ccc9a9de4c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
export const ApiService = {
    async fetching(url) {
        const response = await axios.get(`${BASE_URI}/${url}`, options)
        return response.data
    } 
}