import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Row.scss"
import { img_url, instance } from "../../../requests"

const Row = ({ title, fetchUrl }) => {
  //A funtion to fecth data
  async function fetchData() {
    const request = await instance.get(fetchUrl)
    const { data } = request
    //Made a logic using the title attribute to understand which row is this.
    title === "Now Showing" ? setMovies(data.results.slice(0, 5)) : setMovies(data.results)
  }
  
  const [movies, setMovies] = useState([])
  
  //Called the function here.
  useEffect(() => {
    fetchData()
  }, [fetchUrl])

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row__posters ${title === "Now Showing" ? "scroll" : false}`} >
        {movies.map((movie) => 
        <NavLink key={movie.id} state={title === "Now Showing" ? true : false} to={`/detail/${movie.id}`}><img src={`${img_url}${movie.poster_path}`} /></NavLink>)}
      </div>
    </div>
  )
}

export default Row