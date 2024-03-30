import Header from "../../header/header"
import FirstBlock from "./firstBlock/firstBlock"
import SecondBlock from "./secondBlock/secondBlock"

const Homepage = () =>{
    return <div className = "homepageContainer flexCenter flexColumn" >
        <div style={{width:"70%",color:"black"}}>
            <Header></Header>
            <FirstBlock></FirstBlock>
        </div>
        
            <SecondBlock></SecondBlock>
    </div>
}



export default Homepage