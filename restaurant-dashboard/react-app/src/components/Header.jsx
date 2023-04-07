import { Container, Row, Col } from 'react-bootstrap';
import Clock from './Clock';
import React from 'react';

function Header() {

    return (
      <header className="header border-bottom fixed-top p-2">
        <Container fluid>
          <Row className="align-items-center">
            <Col xs={6} className="text-start">
              <p className="mb-0">Lucas Pahlisch</p>
            </Col>
            <Col xs={6} className="text-end">
              <Clock />
            </Col>
          </Row>
        </Container>
      </header>
    );
  }

export default Header