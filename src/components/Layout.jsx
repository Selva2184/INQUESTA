// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet /> {/* This will render the current route's element */}
    </div>
  );
};

export default Layout;
