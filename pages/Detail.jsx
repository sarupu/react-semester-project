import Selector from "../src/components/Selector/Selector"
import Button from "../src/components/Button/Button"
import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import requests, { img_url, instance } from "../src/requests"
import "./Detail.scss"

const Detail = () => {
  //Used params to get the id's of the selected movie.
  const { id } = useParams()
  const location = useLocation()
  const [movie, setMovie] = useState()
  const [isBuying, setIsBuying] = useState(false)
  const handleTrigger = () => setIsBuying(true)

  //I used that id to fetch the movie details.
  async function fetchData() {
    const request = await instance.get(`${id}${requests.fetchDetails}`)
    const { data } = request

    setMovie(data)
  }

  //Called the function here and wrote a console log message to be sure that it triggers one time.
  useEffect(() => {
    fetchData()
    return () => console.log("fires one time")
  }, [id])

  //Here are some data manipulation
  let cast = movie?.credits.cast.slice(0, 3).map(cast => `${cast.name}`)
  cast = cast?.join(", ")
  let genre = movie?.genres.map(genre => genre.name)
  genre =genre?.join(", ")
  
  return (
    <div className="detail">
      <div className="titlenposter">
        <img src={`${img_url}${movie?.poster_path}`} />
        <div className="wrapper">
          <div className="movie-title">
            <h1>{movie?.title}</h1>
            <div className="movie-rating">
              <span>IMDB </span>
              {(Math.floor(movie?.vote_average * 10) / 10)}
            </div>
          </div>
          <div className="additional">
            <div className="additional__wrapper">
              <div className="movie-credit">
                <p>
                  <strong>Director: </strong>{movie?.credits.crew.find(crew => crew.job === "Director").original_name}
                  <br />
                  <strong>Cast: </strong>{cast}
                </p>

                <p><strong>Release Date: </strong>{movie?.release_date.split("-").reverse().join("-")}
                <br />
                <strong>Duration: </strong>{`${Math.floor(movie?.runtime / 60)} h ${movie?.runtime % 60} m`}
                <br />
                <strong>Genre: </strong>{genre}
                </p>
                <p><strong>Summary: </strong> {movie?.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-buttons">
        {location.state && <Button text={"Buy Now"} handleTrigger={handleTrigger}/>}
      </div>
      {isBuying && <Selector handleTrigger={handleTrigger} />}
    </div>
  )
}

export default Detail