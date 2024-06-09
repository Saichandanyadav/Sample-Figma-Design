import {Link} from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => (
  <nav className="navbar">
    <div className="nav-logo">
      <img src="/path-to-your-logo.png" alt="LAMA" />
      <span>LAMA</span>
    </div>
    <ul className="nav-links">
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/configuration">Widget Configuration</Link>
      </li>
      <li>
        <Link to="/deployment">Deployment</Link>
      </li>
      <li>
        <Link to="/pricing">Pricing</Link>
      </li>
    </ul>
    <div className="nav-settings">
      <Link to="/account-settings">⚙️</Link>
    </div>
  </nav>
)

export default NavBar
