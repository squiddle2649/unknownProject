import './headerStyling.css'
import {Link} from 'react-router-dom';

const Header = ()=>{
    
    return <div className="flexRow flexSpaceEvenly headerContainer">
        <Link className='underlineOnHover' to='/'>
            <h3 className="bold">Home</h3>
        </Link>
        <Link className='underlineOnHover' to='/contact'>
            <h3 className="bold">Contact</h3>
        </Link>
        <Link className='underlineOnHover' to='/contact'>
            <h3 className="bold">About me</h3>
        </Link>
    </div>
}
export default Header