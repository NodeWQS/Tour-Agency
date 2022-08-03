import { Header } from "./header"
import '../css/contact.css'

export const Contact = () => {
    return (
        <>
        <Header />
        <div className="container">
            <form action="">
                <div className="contact_title"><h1>Contact With US</h1></div>
                <input type='email' placeholder="email" required />
                <input type="text" placeholder="subject"  defaultValue='' />
                <textarea name="" id="" cols="30" rows="10" placeholder="message" required />
                <button className="form_btn">Send</button>
            </form>
        </div>
        </>
    )
}