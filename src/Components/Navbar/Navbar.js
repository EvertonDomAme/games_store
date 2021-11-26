import * as S from './Styled';
import Logo from '../AboutRotate/Logo';
import Logo192 from './logo192.png';
import { FaGamepad } from 'react-icons/fa';


export default function Navbar() {
  return (
    <S.Navbar>
      <S.SteamOpt>
        <S.Img src={ Logo192 } alt='Steam' />
        <S.NavLink to='/'>Home</S.NavLink>
        <S.NavLink to='/wishlist'>Wish-List</S.NavLink>
        <S.NavLink to='/support'>Support</S.NavLink>
        <S.NavLink to='/sign-in'>Sign In</S.NavLink>
        <S.NavLink to='/login'>Login</S.NavLink>
        <S.NavLink to='/profile'><FaGamepad />Profile</S.NavLink>
      </S.SteamOpt>
      <S.SteamSecondaryNav>
        <S.InstallSpan>    
            <S.Install src='https://store.cloudflare.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1' />
            <S.InstallTxt>
              GameDOM APP
            </S.InstallTxt>
        </S.InstallSpan>
        <S.AboutMe>
          <S.NavLink to='/aboutDom'>
            <Logo />
          </S.NavLink>
        </S.AboutMe>
      </S.SteamSecondaryNav>
    </S.Navbar>
  );
}