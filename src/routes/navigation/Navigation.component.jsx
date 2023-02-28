import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrwnSvg } from '../../assets/crown.svg';
import { logOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

export const Navigation = () => {
  
  const { currentUser, setCurrentUser } = useContext(UserContext); 

  const handleSignOut = async () => {
    await logOutUser();
    setCurrentUser(null);
  }

  // console.log(currentUser);
  return (
    <div className='navigation'>
        <Link className='logo-container' to='/'>
           <CrwnSvg />
        </Link>
        <div className="nav-links-container">
          <NavLink className='nav-link' to='/'>Categories</NavLink>
          <NavLink className='nav-link' to='shop'>Shop</NavLink>
          {
            currentUser ? <span className='nav-link' onClick={handleSignOut}>Sign Out</span> :  <NavLink className='nav-link' to='auth'>Sign In</NavLink>
          }
        </div>
    </div>
  )
}
