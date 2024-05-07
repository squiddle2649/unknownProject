import Header from "../../header/header";
import './aboutPageStyling.css'
const AboutPage = ()=>{

    return <div>
        <Header></Header>
        <div className="aboutPageContainer flexColumn flexCenter">
            <div className="aboutPage">
                <h1 className="bold">About me</h1>
                <h2>Hi, I'm Bruno.</h2>
            </div>
        </div>
    </div>
}

export default AboutPage;