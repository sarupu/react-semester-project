import { useEffect, useState } from "react"
import "./SeatPicker.scss"
import Seat from "./Seat"
import Button from "../Button/Button"

const SeatPicker = () => {
const [selectedSeats, setSelectedSeats] = useState([])
const seatClickHandler = (element) => {
  selectedSeats.includes(element.name) ? setSelectedSeats((selectedSeats) => 
  selectedSeats.filter((_, index) => index !== selectedSeats.indexOf(element.name))) : setSelectedSeats((selectedSeats) => [...selectedSeats, element.name])
}
useEffect(() => {
  console.log(selectedSeats)
  console.log(selectedSeats.length * 10)
}, [selectedSeats])

const payment = selectedSeats.length * 10

  return (
    
      <div className="seatpicker__container">
        <div className="seatpicker">
          <Seat seatsInRow={7} rowLetter={"a"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"b"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"c"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"d"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"e"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"f"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"g"} onClick={seatClickHandler}/>
          <Seat seatsInRow={7} rowLetter={"h"} onClick={seatClickHandler}/>
        </div>
      </div>
    
  )
}

export default SeatPicker