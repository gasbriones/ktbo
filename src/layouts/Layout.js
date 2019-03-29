import React from 'react';
import PropTypes from 'prop-types'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar dark color="dark" className="mb-3">
                <Container>
                    <NavbarBrand href="/">Buscador de gifs</NavbarBrand>
                </Container>
            </Navbar>
            {children}
        </div>
    )
};


export default Layout

Layout.propTypes = {
    children: PropTypes.element.isRequired
};
