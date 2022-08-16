const Seat = ( {seatsInRow, rowLetter, onClick} ) => {
  let rowConstructorArray = []
  for (let i = 0; i < seatsInRow; i++) {
    rowConstructorArray.push(i)
  }
  
  return (
    <div className="seatpicker__container__row">
      <span>{rowLetter.toUpperCase()}</span>
      {rowConstructorArray.map((e, index) => 
      <input 
        key={`${rowLetter.toUpperCase()}-${index + 1}`}
        name={`${rowLetter.toUpperCase()}-${index + 1}`} 
        type="checkbox" 
        onClick={(e) => onClick(e.target)}
      />)}
    </div>
  )
}

export default Seat