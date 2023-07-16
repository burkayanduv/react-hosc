import React from 'react';
import NavbarUsername from './NavbarUsername';

const Navbar = () => {
  return (
    <div className="flex flex-col items-center gap-1 border border-blue-400 p-1">
      <span className="p-1">Navbar (server)</span>
      <NavbarUsername showUserName />
    </div>
  );
};

export default Navbar;
