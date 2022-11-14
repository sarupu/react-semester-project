import axios from "axios"
import { useCallback } from "react"
import { useState } from "react"

export const img_url = "https://image.tmdb.org/t/p/w500"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
})

//Here are some hidden api key calling action.
const requests = {
  fetchNowShowing: `/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&region=US&page=1`,
  fetchUpcoming: `/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }&region=US&page=1`,
  fetchDetails: `?api_key=${
    import.meta.env.VITE_API_KEY
  }&append_to_response=credits`,
}

const useFetch = () => {
  // Here i created all the variables that i will use in the site.
  const [movies, setMovies] = useState([])
  const [moviePoster, setMoviePoster] = useState("")
  const [movieTitle, setMovieTitle] = useState("")
  const [movieVote, setMovieVote] = useState()
  const [movieDirector, setMovieDirector] = useState("")
  const [movieCast, setMovieCast] = useState("")
  const [movieDate, setMovieDate] = useState("")
  const [movieDuration, setMovieDuration] = useState("")
  const [movieGenre, setMovieGenre] = useState("")
  const [movieSummary, setMovieSummary] = useState("")

  const getPosters = async (rowTitle) => {
    let result

    if (rowTitle === "Now Showing") {
      result = await instance.get(requests.fetchNowShowing)

      setMovies(result.data.results.slice(0, 5))
    } else {
      result = await instance.get(requests.fetchUpcoming)

      setMovies(result.data.results)
    }
  }

  const getDetails = useCallback(async (id) => {
    let result = await instance.get(`${id}${requests.fetchDetails}`)

    // I made some data manipulations before i set the data.
    setMoviePoster(`${img_url}${result.data.poster_path}`)
    setMovieTitle(result.data.title)
    setMovieVote(Math.floor(result.data.vote_average * 10) / 10)
    setMovieDirector(
      result.data.credits.crew.find((crew) => crew.job === "Director")
        .original_name
    )
    setMovieCast(
      result.data.credits.cast
        .slice(0, 3)
        .map((cast) => `${cast.name}`)
        .join(", ")
    )
    setMovieDate(result.data.release_date.split("-").reverse().join("-"))
    setMovieDuration(
      `${Math.floor(result.data.runtime / 60)} h ${result.data.runtime % 60} m`
    )
    setMovieGenre(result.data.genres.map((genre) => genre.name).join(", "))
    setMovieSummary(result.data.overview)
  }, [])

  return {
    movies: movies,
    poster: moviePoster,
    title: movieTitle,
    vote: movieVote,
    director: movieDirector,
    cast: movieCast,
    releaseDate: movieDate,
    duration: movieDuration,
    genre: movieGenre,
    summary: movieSummary,
    getPosters: getPosters,
    getDetails: getDetails,
  }
}

export default useFetch
