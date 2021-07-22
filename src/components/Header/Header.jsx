import { Link } from 'react-router-dom';
import SNavBar from './Style';

function Header() {
  return (
    <>
      <SNavBar id="navBar">
        <div className="logo">Julien Delemarle</div>
        <nav>
          <ul>
            <a href="/Cv">
              <li className="home">
                <Link to="/">Home</Link>
              </li>
            </a>
            <a href="/Cv">
              <li className="Cv">
                <Link to="/Cv">CV</Link>
              </li>
            </a>
            <a href="/Projets">
              <li className="Projets">
                <Link to="/Projects">Projets</Link>
              </li>
            </a>
            <a href="/centres d'intérêt">
              <li className="interest">
                <Link to="/Interest">intérêts</Link>
              </li>
            </a>
            <a href="/contact">
              <li className="Contact">
                {' '}
                <Link to="/Contact">Contact</Link>
              </li>
            </a>
          </ul>
        </nav>
      </SNavBar>
    </>
  );
}
export default Header;
