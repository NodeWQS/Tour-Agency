import { useState } from "react"
import { Header } from "./header"
import '../css/tour.css'
import { TourData as data } from "../data"
import { Card } from "./tour_card"
import { Link } from "react-router-dom"

export const Tours = () => {
    const [tours, setTours] = useState(data)
    const [countries, setCountries] = useState(['All Tours','Czech Republic','Germany','UAE','China', 'Egypt', 'Greece', 'Sri Lanka', 'Philippines', 'France'])
    const filter = country => country === 'All Tours'? setTours(data): setTours(data.filter( i => i.location === country))

    return (
        <div className="tours">
            <Header />
            <div className="container">
                <div className="country">{ countries.map(i => <button onClick={ filter.bind(this, i) }>{i}</button>) }</div>
                <div className="tours_cont">
                { tours.map( elem => <Link to={`/tour/${elem.id}`} className="card_link"><Card title={elem.title} photo = {elem.photo} price={elem.price} rating={elem.rating}  location= {elem.location} day={elem.day}/></Link> )}
                </div>
            </div>
        </div>
    )
}