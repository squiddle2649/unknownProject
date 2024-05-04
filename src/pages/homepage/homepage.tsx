import Header from "../../header/header"
import FirstBlock from "./firstBlock/firstBlock"
import SecondBlock from "./secondBlock/secondBlock"

const Homepage = () =>{
    return <div className = "homepageContainer flexCenter flexColumn" >
    <div style={{color:"black",width:"70%"}}>
            <Header></Header>
        </div>
            <FirstBlock></FirstBlock>
        
            <SecondBlock></SecondBlock>
    </div>
}



export default Homepage