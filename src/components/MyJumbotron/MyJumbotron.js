import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styles from './MyJumbotron.module.sass';

export default () => (
  <Row>
    <Col lg={{ offset: 2, span: 8 }}>
      <Jumbotron className={styles.jumbotron}>
        <h1 className={styles.message}>Nerd Elections 2019</h1>
      </Jumbotron>
    </Col>
  </Row>
);