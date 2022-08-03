import { PartnersData } from '../data'
import { Header } from './header'
import '../css/about.css'
import { useEffect, useState } from 'react'

export const About = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(PartnersData)
    }, [])
    return (
        <> 
            <Header />
            <div className="container">
                <div className="about">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti reprehenderit deleniti quam velit officia praesentium, quis laboriosam! Blanditiis totam voluptatibus debitis eligendi quia adipisci repellat cumque earum est fuga sint placeat laborum, rem nihil dolore necessitatibus. Adipisci corporis officia, eaque cum perspiciatis suscipit voluptatem aliquid ducimus porro exercitationem, quo aspernatur voluptatibus? Quod error possimus impedit asperiores, debitis dolorum doloremque expedita laboriosam. Sed, maxime commodi? Quis veritatis eaque, necessitatibus eum beatae laudantium laborum sunt? Cumque laboriosam tempore, repudiandae laudantium rerum inventore delectus cupiditate non. Impedit, consequuntur. Soluta rem officia fuga, cumque asperiores voluptatum aperiam odit. Recusandae vitae, ratione voluptates totam nesciunt dolores cupiditate quos, iure eaque officiis quasi dignissimos labore, iusto deleniti aspernatur quidem! Assumenda, molestias, quaerat voluptas quo pariatur cum quae vitae nesciunt atque optio eaque, laudantium at dolore. Nam, asperiores fuga, provident consequuntur sequi obcaecati nesciunt repellat dicta deserunt aut maiores, esse ea nihil vero a quas officiis? Beatae.</p>
                </div>
                <div className="about">
                    <h1>Our Partners</h1>
                    <div className="partners">
                        { data.map(path => <div className="par_card"><img src={ path } alt='data' /></div> )}
                    </div>
                </div>
            </div>
            
        </>
    )
}