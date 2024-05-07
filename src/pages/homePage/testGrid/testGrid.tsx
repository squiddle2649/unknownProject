import './testGridStyling.css'
import {Link} from 'react-router-dom';

const TestGrid = ()=>{
    return <div className="subjectsGridContainer flexCenter">
        <div className="subjectsGrid">
            <GridItem title="Math"
                      emoji="🔢"
                      subject = "math"

            ></GridItem>
            <GridItem title="German"
                      emoji="🇩🇪"
                      subject = "german"

            ></GridItem>
            <GridItem title="Programming"
                      emoji="👨‍💻"
                      subject = "programming"

            ></GridItem>
            <GridItem title="Chemistry"
                      emoji="🧪"
                      subject = "chemistry"

            ></GridItem>
        </div>
    </div>
}
export default TestGrid

const GridItem = (props:any)=>{
    return <Link className="gridItemContainer flexCenter flexColumn noDecoration" to={`/${props.subject}`}>
        <h3 style={{marginBottom:"0"}}>{props.title}</h3>
        <h2 style={{marginTop:"15px"}}>{props.emoji}</h2>

    </Link>

}