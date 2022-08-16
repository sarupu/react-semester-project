import axios from "axios"

// I created this requests file to get the request url parts from.
export const img_url = "https://image.tmdb.org/t/p/w500"

export const instance = axios.create({
  baseURL : "https://api.themoviedb.org/3/movie"
})

//Here are some hidden api key calling action.
const requests = {
  fetchNowShowing: `/now_playing?api_key=${import.meta.env.VITE_API_KEY}&region=US&page=1`,
  fetchUpcoming: `/upcoming?api_key=${import.meta.env.VITE_API_KEY}&region=US&page=1`,
  fetchDetails: `?api_key=${import.meta.env.VITE_API_KEY}&append_to_response=credits`
}

export default requests