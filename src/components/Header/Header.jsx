import SNavBar from './Style';

function Header() {
  return (
    <>
      <SNavBar id="navBar">
        <div className="logo">Julien Delemarle</div>
        <nav>
          <ul>
            <a href="/about">
              <li className="about">à propos</li>
            </a>
            <a href="/skills">
              <li className="skills">skills</li>
            </a>
            <a href="/projets">
              <li className="projets">projets</li>
            </a>
            <a href="/perso">
              <li className="perso">perso</li>
            </a>
            <a href="/contact">
              <li className="Contact">Contact</li>
            </a>
          </ul>
        </nav>
      </SNavBar>
    </>
  );
}
export default Header;
