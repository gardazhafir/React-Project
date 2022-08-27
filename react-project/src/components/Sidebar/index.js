import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo_G from '../../assets/images/Logo_G.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressBook, faHomeAlt, faUserCircle} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <img src={Logo_G} alt="logo"/>
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHomeAlt} color="#000000"/>
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className="about" to="/about">
            <FontAwesomeIcon icon={faUserCircle} color="#000000"/>
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className="contact" to="/contact">
            <FontAwesomeIcon icon={faAddressBook} color="#000000"/>
            </NavLink>
        </nav>

    </div>
)

export default Sidebar