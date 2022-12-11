import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProfileModal from '../../Users/components/ProfileModal';
import SearchApp from './Search';


const Header = () => {
  const [modalShow, setModalShow] = useState(false);


  function deleteToken() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");

  }
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <SearchApp />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <ProfileModal
            show={modalShow}
            onHide={() => setModalShow(false)} />
          <Nav>
            <Nav.Link eventKey={2} href="login" title={'Exit'} >
              <i className="bi bi-box-arrow-right" style={{ fontSize: "2rem" }} onClick={deleteToken}></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
  ;