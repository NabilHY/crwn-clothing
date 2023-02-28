import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ReactComponent as CrwnSvg } from '../../assets/crown.svg';
import './navigation.styles.scss';

export const Navigation = () => {
  const { currentUser } = useContext(UserContext); 
  return (
      <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnSvg />
          </Link>
          <div className="nav-links-container">
            <NavLink className='nav-link' to='/'>Categories</NavLink>
            <NavLink className='nav-link' to='shop'>Shop</NavLink>
            <NavLink className='nav-link' to='auth'>Sign In</NavLink>
          </div>
        </div>
  )
}
