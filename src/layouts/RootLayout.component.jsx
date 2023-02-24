import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../routes/navigation/Navigation.component';

const RootLayout = () => {
    return (
      <Fragment>
            <Navigation />
            <Outlet />
      </Fragment>
      
  )
}

export default RootLayout;