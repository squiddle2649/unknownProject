import './subjectsGridStyling.css'
import {Link} from 'react-router-dom';

const SubjectsGrid = ()=>{
    return <div className="subjectsGrid">
        <GridItem title="Math"
                  emoji="🔢"
                  description = "Math is hard sometimes, but it doesn't have to be."
        ></GridItem>
        <GridItem title="English"
                  emoji="🇬🇧"
                  description = "I am very good so you could learn from me."
        ></GridItem>
        <GridItem title="German"
                  emoji="🇩🇪"
                  description = "I am very good so you could learn from me."
        ></GridItem>
        <GridItem title="Chemistry"
                  emoji="🧪"
                  description = "I am very good so you could learn from me."
        ></GridItem>
    </div>
}
export default SubjectsGrid

const GridItem = (props:any)=>{
    return <Link className="gridItemContainer flexCenter flexColumn noDecoration" to="/contact">
        <h3 style={{marginBottom:"0"}}>{props.title}</h3>
        <h2 style={{marginTop:"15px"}}>{props.emoji}</h2>
        {/* <div className="subjectDescription flexCenter">
            <p style={{textAlign:"center",marginTop:"0"}}>{props.description}</p>       
        </div> */}
    </Link>

}