import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
    return (
      <div>
            <div>I'm the navbar component</div>
            <Link to='/'>Categories</Link>
            <Link to='shop'>Shop</Link>
            <Outlet />
      </div>
      
  )
}

export default RootLayout;