import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import useFetch from "../../../hooks/use-fetch"
import { img_url } from "../../../hooks/use-fetch"
import "./Row.scss"


const Row = ({ title }) => {

  const { movies, getPosters } = useFetch()

  //Called the function here.
  useEffect(() => {
    getPosters(title)
    console.log(movies)
  }, [title])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${title === "Now Showing" ? "scroll" : false}`} >
        {movies?.map((movie) => 
        <NavLink key={movie?.id} state={title === "Now Showing" ? true : false} to={`/detail/${movie.id}`}><img src={`${img_url}${movie?.poster_path}`} /></NavLink>)}
      </div>
    </div>
  )
}

export default Row