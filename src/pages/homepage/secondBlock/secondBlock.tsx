import './secondBlockStyle.css'
import SubjectsGrid from './subjectsGrid/subjectsGrid'

const SecondBlock = () =>{
    return <div className='secondBlockContainer flexCenter flexColumn'>
        <h2 style={{fontSize:"32px",marginTop:"0"}}
        className='bold'>How can I help you?</h2>
        <SubjectsGrid></SubjectsGrid>        
    </div>
}
export default SecondBlock



