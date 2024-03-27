import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.scss";
function Header() {
  //style
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  const [menuOpen, setMenuOpen] = useState(false);
  const handleHambug = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <header>
        <nav className={menuOpen ? "menu" : "menu-Open"}>
          <div className="container">
            <Link basename={process.env.PUBLIC_URL} to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/MUFLIX.jpg`}
                className="logo"
                alt="MUFLIX Logo"
              />
            </Link>
            <img
              className="hambug"
              src={`${process.env.PUBLIC_URL}/images/menu3.png`}
              onClick={handleHambug}
            />
          </div>
          <ul>
            <StyledLink basename={process.env.PUBLIC_URL} to="/Movie/Action">
              <li>Action</li>
            </StyledLink>
            <StyledLink basename={process.env.PUBLIC_URL} to="/Movie/Sci-Fi">
              <li>Science Fiction</li>
            </StyledLink>
            <StyledLink basename={process.env.PUBLIC_URL} to="/Movie/Drama">
              <li>Drama</li>
            </StyledLink>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
