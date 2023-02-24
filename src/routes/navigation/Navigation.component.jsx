import { ReactComponent as CrwnSvg } from '../../assets/crown.svg';
import { Link, NavLink } from 'react-router-dom';
import './navigation.styles.scss';

export const Navigation = () => {
  return (
      <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnSvg />
          </Link>
          <div className="nav-links-container">
            <NavLink className='nav-link' to='/'>Categories</NavLink>
            <NavLink className='nav-link' to='shop'>Shop</NavLink>
            <NavLink className='nav-link' to='sign-in'>Sign In</NavLink>
          </div>
        </div>
  )
}
