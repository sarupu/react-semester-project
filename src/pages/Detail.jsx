import Selector from "../components/Selector/Selector"
import Button from "../components/Button/Button"

import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import useFetch from "../hooks/use-fetch"
import "./Detail.scss"

const Detail = () => {
  //Used params to get the id's of the selected movie.
  const { id } = useParams()
  const location = useLocation()

  const [isBuying, setIsBuying] = useState(false)
  const handleTrigger = () => setIsBuying(true)
  const { poster, title, vote, director, cast, releaseDate, duration, genre, summary, getDetails } = useFetch()

  //Called the function here and wrote a console log message to be sure that it triggers one time.
  useEffect(() => {
    //I used that id to fetch the movie details.
    getDetails(id)
    return () => console.log("fires one time")
  }, [id])

  
  return (
    <div className="detail">
      <div className="titlenposter">
        <img src={poster} />
        <div className="wrapper">
          <div className="movie-title">
            <h1>{title}</h1>
            <div className="movie-rating">
              <span>IMDB </span>
              {vote}
            </div>
          </div>
          <div className="additional">
            <div className="additional__wrapper">
              <div className="movie-credit">
                <p>
                  <strong>Director: </strong>{director}
                  <br />
                  <strong>Cast: </strong>{cast}
                </p>
                <p><strong>Release Date: </strong>{releaseDate}
                <br />
                <strong>Duration: </strong>{duration}
                <br />
                <strong>Genre: </strong>{genre}
                </p>
                <p><strong>Summary: </strong> {summary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-buttons">
        {location.state && <Button text={"Buy Now"} handleTrigger={handleTrigger}/>}
      </div>
      {isBuying && <Selector />}
    </div>
  )
}

export default Detail