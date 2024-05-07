import { Link } from "react-router-dom"
import './subjectPagesStyling.css'

export const ChemPage=()=>{
    return <div className="subjectPage">
        <h1 className="bold">Chemistry🧪</h1>
        <p>Atoms, molecules, charges, reactions…what does this even mean???</p> 
        <p>Chemistry can seem like a bunch of long words mixed with complex drawings and concepts that make no sense.</p>
        <p>Don't worry–I've been there too. If you struggle with chemistry, let me teach it to you in a comprehensible, engaging way that sparks your curiosity.</p>
        <div 
            style={{marginTop:"30px"}}>
            <p className="bold">Grade: 10th or below</p>
        </div>
    </div>
}

export const GermanPage=()=>{
    return <div className="subjectPage">
        <h1 className="bold">German🇩🇪</h1>
        <p>German can seem like a daunting language to master. It will take hard work, but you can let me help.</p>
        <p>I managed to reach a B1 level in 4 months and you can too.</p>
        <div 
            style={{marginTop:"30px"}}>
            <p className="bold">Level: lower than B1</p>
        </div>
    </div>
}

export const Programming=()=>{
    return <div className="subjectPage">
        <h1>Programming</h1>
        <p>Programming is one of the most valuable skills of the 21st century and I'm ready to teach it to you. If you want to learn how to build websites and even publish them to the internet, <Link to={"/contact"}>Contact</Link> me today.</p>
        <div 
            style={{marginTop:"30px"}}>
            <p className="bold">Level: beginner</p>
        </div>
    </div>
}

export const Math = ()=>{

    return <div className="subjectPage">
        <h1 className="bold">Math 🔢</h1>
        <p>Math can be hard, but it doesn't have to be.</p>
        <p>I have solid experience as a math tutor and know how to explain confusing concepts in a simple way.</p>    
        <p><Link to={"/contact"}>Contact</Link> me today to level up your math skills.</p>
        <div 
            style={{marginTop:"30px"}}>
            <p className="bold">Grade: 10th or below</p>
        </div>       

    </div>
}