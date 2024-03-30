import './firstBlockStyle.css'

const FirstBlock = () =>{
    return <div className="flexColumn flexCenter firstBlockContainer ">
        <div className="flexRow photoAndText flexCenter">
            <div className="firstBlockText">
                <h2 style={{marginTop:"0"}} className='bold'>Hey friends —</h2>
                <h3 className='description medium'>I’m Bruno, an 11th grader at a German Gymnasium.</h3>
                <p>As a student DIAGONAL with excelent grades, I am ready to tutor you in any of the subjects below. Want better grades? Contact me.</p>
            </div>
            <img className="portrait" src ={require("../../../images/usingPhone.jpg")}></img>
            <div className='waveBlock waveClass'></div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" /* height='30px' */ className="wave waveClass" stroke='#f3bfbf' viewBox="0 0 1440 320" ><path fill-opacity="1" d="M0,256L24,218.7C48,181,96,107,144,85.3C192,64,240,96,288,128C336,160,384,192,432,197.3C480,203,528,181,576,160C624,139,672,117,720,138.7C768,160,816,224,864,218.7C912,213,960,139,1008,128C1056,117,1104,171,1152,192C1200,213,1248,203,1296,186.7C1344,171,1392,149,1416,138.7L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>        

    </div>
}

export default FirstBlock