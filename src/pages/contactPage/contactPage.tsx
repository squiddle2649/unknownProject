import Header from "../../header/header"
import MailIcon from "../../SVG/mailIcon"
import PhoneIcon from "../../SVG/phoneIcon"
import './contactPageStyling.css'

const ContactPage = () =>{
    return <div style={{overflowX:'hidden'}}>
        <Header></Header>
        <div className="contactPageContainer flexCenter">
            <div className="contactPage">
                <h1 className="bold">Contact me</h1>
                <ContactInfo
                    icon ={<MailIcon></MailIcon>}
                    text ="bruno.abj2017@gmail.com"
                ></ContactInfo>
                <ContactInfo
                    icon ={<PhoneIcon></PhoneIcon>}
                    text ="+49 15166521050"
                ></ContactInfo>
            </div>
        </div>
    </div>
}

const ContactInfo = (props:any)=>{
    return <div className='contactInfo flexAlignCenter'>
        <div>{props.icon}</div>
        <p style={{marginLeft:"10px"}}>{props.text}</p>
    </div>  
}

export default ContactPage