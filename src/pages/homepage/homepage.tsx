import Header from "../../header/header"
import FirstBlock from "./firstBlock/firstBlock"
import SecondBlock from "./secondBlock/secondBlock"

const Homepage = () =>{
    return <div className = "homepageContainer flexCenter" >
        <div style={{width:"70%"}}>
            <Header></Header>
            <FirstBlock></FirstBlock>
            <SecondBlock></SecondBlock>
        </div>
    </div>
}



export default Homepage