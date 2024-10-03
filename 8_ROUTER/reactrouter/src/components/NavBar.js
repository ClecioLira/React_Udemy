// Links com o react router
import './NavBar.css';

import { NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link> <br/>
        <Link to="/about">About</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
  )
}

export default NavBar