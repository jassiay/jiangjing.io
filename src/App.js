import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PrimaryCard from './components/PrimaryCard';
import InfoCard from './components/InfoCard';
import BlankCard from './components/BlankCard';
import SectionCard from './components/SectionCard';
import ProjectCard from './components/ProjectCard';
import Header from './components/Header';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  return (
    <Container fluid>
      {/* <Header /> */}
      {/* Info Row */}
      <Row className="d-flex justify-content-center">
          <PrimaryCard />
          <InfoCard info="about" />
          <InfoCard info="skills" />
          <BlankCard twoCol fourCol />
      </Row>
      {/* Projects Row */}
      <Row className="d-flex justify-content-center">
          <SectionCard title="work" />
          <ProjectCard proj="recreate-manhattan" />
          <ProjectCard proj="fish-pomodoro" />
          <ProjectCard proj="story-gen" />
          <BlankCard threeCol />
          <BlankCard threeCol />
      </Row>
      {/* Contact Row */}
      <Row className="d-flex justify-content-center">
          <SectionCard title="contact" />
          <SectionCard title="resume" />
          <BlankCard threeCol fourCol />
          <BlankCard fourCol />
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
