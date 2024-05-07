import './headerStyling.css'
import {Link} from 'react-router-dom';
import Menu from './sidebarMenu/sidebar';

const Header = ()=>{
    
    return <div>
        <div className="flexRow flexSpaceEvenly headerContainer">
            <Link className='underlineOnHover' to='/test'>
                <h3 className="bold">Home</h3>
            </Link>
            <Link className='underlineOnHover' to='/contact'>
                <h3 className="bold">Contact</h3>
            </Link>
            <Link className='underlineOnHover' to='/about'>
                <h3 className="bold">About me</h3>
            </Link>
        </div>
        <Menu></Menu>
    </div>
}
export default Header