import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MyNavbar from '../MyNavbar/MyNavbar';
import MyJumbotron from '../MyJumbotron/MyJumbotron';
import Content from '../Content/Content';
import './App.module.sass';

export default () => (
  <Router>
    <MyNavbar />
    <Container fluid className="mt-5">
      <MyJumbotron />
      <Content />
    </Container>
  </Router>
);
