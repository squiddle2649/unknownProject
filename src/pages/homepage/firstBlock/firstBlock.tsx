import './firstBlockStyle.css'

const FirstBlock = () =>{
    return <div className="flexRow flexAlignStart blockContainer">
        <img className="portrait" src ={require("../../../images/usingPhone.jpg")}></img>
        <div>
            <div className="firstBlockText">
                <h2 style={{marginTop:"0"}} className='bold'>Hey friends —</h2>
                <h3 className='description medium'>I’m Bruno, an 11th grader at a German Gymnasium.</h3>
                <p>As a student with excelent grades, I am ready to tutor you in any of the subjects below. The first step to improving your grades is to contact me</p>
            </div>
        </div>
    </div>
}

export default FirstBlock