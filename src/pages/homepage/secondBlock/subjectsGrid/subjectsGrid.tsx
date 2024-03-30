import './subjectsGridStyling.css'
import {Link} from 'react-router-dom';

const SubjectsGrid = ()=>{
    return <div className="subjectsGrid">
        <GridItem title="Math"
                  emoji="🔢"
                  description = "Level up your math skills (up to 10th grade)"
        ></GridItem>
        <GridItem title="German"
                  emoji="🇩🇪"
                  description = "Master German grammar and speed up your journey to B1"
        ></GridItem>
        <GridItem title="Programming"
                  emoji="👨‍💻"
                  description = "Learn Java, Python or web development from a pro"
        ></GridItem>
        <GridItem title="Chemistry"
                  emoji="🧪"
                  description = "Chemistry can be hard, but it doesn't have to be"
        ></GridItem>
    </div>
}
export default SubjectsGrid

const GridItem = (props:any)=>{
    return <Link className="gridItemContainer flexCenter flexColumn noDecoration" to="/contact">
        <h3 style={{marginBottom:"0"}}>{props.title}</h3>
        <h2 style={{marginTop:"15px"}}>{props.emoji}</h2>
        <div className="subjectDescription flexCenter">
            <p style={{textAlign:"center",marginTop:"0"}}>{props.description}</p>       
        </div>
    </Link>

}