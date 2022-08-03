import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "./header"
import { TourData } from "../data"
import starPhoto from '../photos/star.png'
import backPhoto from '../photos/back.png'
import '../css/info.css'

export const TourInfo = () => {
    let { id } = useParams()
    const stars = []
    const [info, setInfo] = useState({})
    for (let index = 0; index < info.rating; index++) {
        stars.push(<img src={ starPhoto }></img>)            
    }
    useEffect(() => {
        setInfo(TourData.find( elem => elem.id === Number(id) ))
    }, [])
    return (
    <>
        <Header />
        <div className="container">
            <div className="info">
            <div className="back">
                <Link to='/tours'><img src={ backPhoto } alt="" /></Link>
            </div>
                <div className="info_cont">
                    <div className="info_img">
                        <img src={ info.photo } alt="" />
                    </div>
                    <div className="info_body">
                        <h1>{ info.title }</h1>
                        <p>{ info.description }</p>
                        <p>price is { info.price }</p>
                        <p>location to { info.location }</p>
                        <p>days { info.day }</p>
                        <p>rating is { stars }</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}