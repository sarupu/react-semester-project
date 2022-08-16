import logo from "../../assets/icons/logo.svg"
import tmdb from "../../assets/icons/TMDB-LOGO.svg"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} />
        <img src={tmdb} />
      </div>
    </header>
  )
}

export default Header;