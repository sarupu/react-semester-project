import SeatPicker from "./SeatPicker"
import { useState } from "react"
import "./Selector.scss"

const Selector = ({ handleTrigger }) => {
  const startingTimes = [
    "08.30",
    "09.45",
    "10.30",
    "12.30",
    "15.00",
    "17.30",
    "21.15",
    "00.30",
  ]

  const [filter, setFilter] = useState()
  const [isTimeSelected, setIsTimeSelected] = useState(false)
  const showSeatSelectorHandler = (time) => {
    setFilter(time)
    setIsTimeSelected(true)
  }
  
  const options = startingTimes.map((time) => 
  <div 
  key={time} 
  className={filter === time ? "active" : ""} 
  onClick={() => showSeatSelectorHandler(time)}>{time}</div>
  )


  return (
    <div className="selector">
      <div className="time">
        {options}
      </div>
      {isTimeSelected && <SeatPicker />}
    </div>
  )
}

export default Selector