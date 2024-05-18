import './homePageStyling.css'
import TestGrid from './testGrid/testGrid'
import Header from '../../menu/header/header'
import { getModeForUsageLocation } from 'typescript'

const TestPage = ()=>{
    return <div className='testPageContainer'>
        <Header></Header>
        <FirstText></FirstText>
        <TestGrid></TestGrid>
        <BraggingText></BraggingText>
    </div>
}


const FirstText = ()=>{

    return <div className="firstTextContainer flexCenter">
        <h1 
            className='firstText bold'>What can I help you with?</h1>
    </div>
}

const BraggingText = ()=>{

    return <div className='braggingContainer flexColumn flexCenter'> 
        <h1 className='bold'>What you can expect from me</h1>

        <div className='benefitsContainer'>
            <Brag
                title="Price"
                description="Lesson prices range from 15€ to 25€, which is definetly worth the amount of commitment and personal care you will receive."
                emoji="💲"
            ></Brag>
            <Brag
                title="Flexibility"
                description="Lessons can be suited and adapted to your own needs and desires. No need to worry about strict prices or times: you decide how you want to be taught."
                emoji="👍"
            ></Brag>
            <Brag
                title="Empathy"
                description="As someone who has worked hard to succeed in school, I often understand students' problems well because I have probably gone through them myself."
                emoji="❤️"
            ></Brag>
            <Brag
                title="Curiosity"
                description="My goal is to give clients an understanding that not only improves their academic performance, but sparks a curiosity in the subject that makes it exciting to learn."
                emoji="💡"
            ></Brag>
        </div>
    </div>
}

export default TestPage


const Brag = (props)=>{
    return <div className='brag'>
        <h3 className='bold'>{props.emoji}{props.title}</h3>
        <p>{props.description}</p>
    </div>
}