import { Col, Container, Image, Row, Button } from 'react-bootstrap';
import './landing.css';

/** The Home page. Test Change */
const Home = () => (
  <main>
    <Container id="landing-page" className="align-middle contents justify-content-center">
      <Row className="align-middle mt-5 pt-5 px-3 justify-content-center">
        <Col xs={5}>
          <div className="d-flex">
            <Image src="uhm-logo.jpg" width="150px" alt="" />
            <h1 className="px-2 align-left">Manoa Food Finder</h1>
          </div>
          <div className="justify-content-center">
            <h4>
              YOUR FAVORITES. ALL IN ONE PLACE
            </h4>
          </div>
        </Col>

        <Col xs={6} className="mx-3 d-flex flex-column justify-content-center background">
          <Button variant="success" className="my-1 background">New? Register here</Button>
          <Button variant="success" className="my-1 background">Login</Button>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
