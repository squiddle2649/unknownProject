import Header from "../../menu/header/header";
import './aboutPageStyling.css'
const AboutPage = ()=>{

    const imageStyling = {
        width:"300px"
    }
    const containerStyling ={
        width:"80vw"
    }
    return <div>
        <Header></Header>
        <div className="aboutPageContainer flexColumn flexCenter">
            <div className="aboutPage">
                <h1 className="bold">Some facts about me</h1>
                <div className="flexCenter contents">
                    <ul style={{marginRight:'40px'}}>
                        <li>
                            <p>Hi, I'm Bruno. A high school student originally from Brazil and now living in Germany.</p>
                        </li>
                        <li>
                            <p>I started tutoring math last year and have enjoyed working with students in a one-on-one setting.</p>
                        </li>
                        <li>
                            <p>I am fluent in German, English and Portuguese as well as some programming languages.</p>
                        </li>
                    </ul>
                    <img 
                        src={require('../../images/coolPhoto.jpg')}
                        style={imageStyling}>
                    </img>
                </div>
            </div>
        </div>
    </div>
}

export default AboutPage;