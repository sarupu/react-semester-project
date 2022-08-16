import Row from "./Row/Row"
import "./Section.scss"
import requests from "../../requests"

const Section = () => {

  return (
    <section className="section">
      <div className="hero-text">
        <h2>Easiest way to book a ticket.</h2>
        <h2>Just click and enjoy!</h2>
      </div>
      <Row title={"Now Showing"} fetchUrl={requests.fetchNowShowing} />
      <Row title={"Upcoming"} fetchUrl={requests.fetchUpcoming} />
    </section>
  )
}

export default Section