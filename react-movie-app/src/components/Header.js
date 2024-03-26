import styled from "styled-components";
import { Link } from "react-router-dom";
function Header() {
  //style

  const HeaderLogo = styled.header`
  margin-bottom: 100px;
  Link{
}
  nav {
      top: 0;
    background-color: black;
    width: 100%;
    position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
padding: 10px;
    ul {
      font-weight: 600;
      display: flex;
      
      li{
        color:#ffffff;
        font-size: 1.2rem;
        padding: 14px 20px;
        margin-right: 2rem;        
      }
      }
    }
}
`;
  const StyledLink = styled(Link)`
    text-decoration: none;
    transition: 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  `;
  return (
    <HeaderLogo>
      <nav>
        <Link basename={process.env.PUBLIC_URL} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/MUFLIX.jpg`}
            className="logo"
            alt="MUFLIX Logo"
          />
        </Link>
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
    </HeaderLogo>
  );
}

export default Header;
