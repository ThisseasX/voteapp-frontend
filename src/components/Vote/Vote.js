import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import styles from './Vote.module.sass';

export default () => (
  <Row>
    <Col md={{ span: 6, offset: 3 }}>
      <Table bordered hover className={styles.table}>
        <thead>
          <tr>
            <th className={`${styles.data} one`}>AFM</th>
            <th className={`${styles.data} two`}>Name</th>
            <th className={styles.data}>Surname</th>
            <th className={styles.data}>Vote</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${styles.data} one`}>1</td>
            <td className={`${styles.data} two`}>John</td>
            <td className={styles.data}>Doe</td>
            <td className={styles.data}>
              <Button variant="primary" title="yes">
                <FaThumbsUp />
              </Button>
              <Button variant="danger" title="no">
                <FaThumbsDown />
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Row>
);
