import Header from "../../header/header";
import './aboutPageStyling.css'
const AboutPage = ()=>{

    return <div>
        <Header></Header>
        <div className="aboutPageContainer flexColumn flexCenter">
            <div className="aboutPage">
                <h1 className="bold">Aboiyut me</h1>
                <p>Monkey see omnkey do monkey see monkey do monekysfluef</p>
                <p>Monkey see omnkey do monkey see monkey do monekysfluef</p>
                <p>Monkey see omnkey do monkey see monkey do monekysfluef</p>
                <p>Monkey see omnkey do monkey see monkey do monekysfluef</p>
            </div>
        </div>
    </div>
}

export default AboutPage;