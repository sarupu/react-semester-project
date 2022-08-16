const Button = ({ handleTrigger, text }) => {
  return (
    <div className="button" onClick={handleTrigger}>
      {text}
    </div>
  )
}

export default Button