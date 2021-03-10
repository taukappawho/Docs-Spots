import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar(){
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/profile">Profile</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/chat">Chat</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/nearby">Nearby</NavLink>
        </NavItem>
      </Nav>
    </div>
  )
};
export default Navbar;