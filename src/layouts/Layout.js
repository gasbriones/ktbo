import React from 'react';
import PropTypes from 'prop-types'
import { Container, Navbar, NavbarBrand } from 'reactstrap'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar dark color="dark" className="mb-3">
                <Container>
                    <NavbarBrand href="/">Top Gifs</NavbarBrand>
                </Container>
            </Navbar>
            {children}
        </div>
    )
};

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default Layout
