import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './MyError.module.sass';

export default ({ error }) => {
  if (!error) return null;
  const { message, small } = error;
  
  return (
    !!message &&
    <Row>
      <Col md={
        !!small
          ? { span: 2, offset: 5 }
          : { span: 6, offset: 3 }
      } className={styles.error}>
        <h3 className={`text-center ${styles.message}`}><strong>{message}</strong></h3>
      </Col>
    </Row >
  )
};