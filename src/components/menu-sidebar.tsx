import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Menu: FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Link uno </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Link dos </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>Link tres </h1>
        </Col>
      </Row>
    </Container>
  );
};
export default Menu;
