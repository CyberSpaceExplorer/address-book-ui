import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{display: 'block', width: 1440, padding: 10}}>
            <Navbar color="dark" dark >
                <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="mailto:xinyizhou1999@hotmail.com">Send Email</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/CyberSpaceExplorer/address-book-ui">GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default AppNavbar;