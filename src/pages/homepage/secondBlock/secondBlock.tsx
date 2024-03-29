import './secondBlockStyle.css'
import SubjectsGrid from './subjectsGrid/subjectsGrid'

const SecondBlock = () =>{
    return <div className='secondBlockContainer'>
        <h2 style={{fontSize:"32px"}}
        className='bold'>How can I help you?</h2>
        <SubjectsGrid></SubjectsGrid>        
    </div>
}
export default SecondBlock



