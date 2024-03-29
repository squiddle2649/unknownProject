import Header from "../../header/header"
import MailIcon from "../../SVG/mailIcon"
import PhoneIcon from "../../SVG/phoneIcon"

const ContactPage = () =>{
    return <div className = "ContactPageContainer flexCenter" >
        <div style={{width:"70%"}}>
            <Header></Header>
            <h1>Contact me</h1>
            <div className="emailContainer flexAlignCenter">
                <MailIcon></MailIcon> 
                <p style={{marginLeft:"10px"}}>bruno.abj2017@gmail.com</p>
            </div>
            <div className="emailContainer flexAlignCenter">
                <PhoneIcon></PhoneIcon>
                <p style={{marginLeft:"10px"}}>+49 15166521050</p>
            </div>
        </div>
    </div>
}



export default ContactPage