// RootLayout.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";



function RootLayout() {
 
  return (
    <div className="d-flex flex-column vh-100">
    {/* Navbar */}
    <div className="m-0 p-0">
      <NavBar />
    </div>

    {/* Outlet */}
    <div className="flex-grow-1 position-relative m-0 p-0">
      <Container fluid className="m-0 p-0 overflow-auto bg-lightgray">
        <Row className="m-0 p-0">
          <Outlet className="bg-dark m-0 p-0" />
        </Row>
      </Container>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
  );
}

export default RootLayout;
