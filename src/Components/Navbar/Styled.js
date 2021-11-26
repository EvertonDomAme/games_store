import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12rem;
  background: #0099F7;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #F11712, #0099F7);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #F11712, #0099F7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  flex-direction: row;
  top: 0;
  border-radius: 10px;
  margin: .3rem 0rem;  
  
  @media(max-width: 900px) {
    height: 18rem;
  }
  
`;

export const AboutMe = styled.div`
  width: 11rem;
  margin-right: 1rem;
`;


export const SteamOpt = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;

  @media(max-width: 900px){
    flex-direction: column;
    width: 50%;
  }
`;

export const SteamSecondaryNav = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:750px) {
    flex-direction: column;
  }
`;

export const InstallSpan = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  
`
export const Install = styled.img`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFF;
`;

export const InstallTxt = styled.p`
  font-size: .8em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: .5em ;
  color: #FFF;
`

export const Img= styled.img`
  width: 6rem;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-bottom: 1rem;
`;
