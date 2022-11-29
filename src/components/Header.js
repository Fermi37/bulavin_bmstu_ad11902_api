import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";


const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;


export default function Header() {

    return (<Navbar className="navbar navbar-expand-sm navbar-dark bg-dark" sticky="top">
        <Container fluid={true}>
            <Navbar.Brand as={NavLink} to="/">
                <img
                    alt=""
                    src="/icon.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Булавин группа AD11902
            </Navbar.Brand>
        </Container>
    </Navbar>);
}
