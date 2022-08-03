import pricePhoto from '../photos/price.png'
import locationPhoto from '../photos/location.png'
import starPhoto from '../photos/star.png'
import clockPhoto from '../photos/clock.png'
import '../css/card.css'

export const Card = ({ title, photo, price, rating, location, day  }) => {
    const stars = []
    for (let index = 0; index < rating; index++) {
            stars.push(<img src={ starPhoto }></img>)   
    }
    return (
        <div className="card">
            <div className="card_img">
                <img src={ photo } alt="tour_card" />
            </div>
            <div className="card_body">
                <div className="card_title"><h3>{ title }</h3></div>
                <div className="card_price"><img src={ pricePhoto } alt="" /> { price }</div>
                <div className="card_price"><img src={ locationPhoto } alt="" /> { location }</div>
                <div className="card_general">
                    <div className="stars">{ stars }</div>
                    <div className="days"><img src={ clockPhoto } alt="clock" />{ day } days</div>
                </div>
            </div>
        </div>
    )
}