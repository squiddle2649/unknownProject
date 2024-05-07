import './sidebarStyling.css'
import { ToggleMenuSVG,CloseSVG } from './sidebarSVG'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = ()=>{
    const [menuToggled,setMenuToggled] = useState(false)
    const toggleVisibility = {
        display:menuToggled?"none":""
    }
    const closeMenuVisibility = {
        display:menuToggled?"":"none"
    }

    const noScroll = {
        position:menuToggled?"fixed":""
    }

    return <div 
        className='menuContainer'
        style={noScroll}>
    <div 
        className="toggleButton" 
        onClick={()=>{setMenuToggled(true)}}
        style={toggleVisibility}>
        <ToggleMenuSVG></ToggleMenuSVG>
    </div>
    {menuToggled&&
        <div className='sidebarMenu'>
            <div 
                className='closeButton'
                onClick={()=>{setMenuToggled(false)}}
                style={closeMenuVisibility}>
                <CloseSVG></CloseSVG>
            </div>
            <Link className="menuOption" to="/test">
                <h2>
                    Home
                </h2>
            </Link>
            <Link className="menuOption" to="/about">
                <h2>
                    About me
                </h2>
            </Link>
            <Link className='menuOption' to="/contact">
                <h2>
                    Contact
                </h2>
            </Link>
        </div>
    }
    </div>
}

export default Menu