import { Row, Col, Container, Image } from 'react-bootstrap';
import { Twitter, Facebook, Instagram } from 'react-bootstrap-icons';
import '../app/globals.css';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => (
  <footer className="mt-auto py-2 bg-light">
    <Container className="justify-content-center aling-middle">
      <Row className="justify-content-center">
        <Col xs={4} className="text-centor test-footer">
          <h3>Contact Us</h3>
          Phone Number: (808) 0000-1234
          <br />
          <span>
            Email:&nbsp;
            <a href="mailto">manoaFoodFinder.edu</a>
          </span>
        </Col>
        <Col xs={2} className="text-left sns-icons">
          <a href="https://twitter.com/">
            <Twitter className="mx-2" />
            Twitter
          </a>
          <br />
          <a href="https://www.facebook.com/">
            <Facebook className="mx-2" />
            Facebook
          </a>
          <br />
          <a href="https://www.instagram.com/">
            <Instagram className="mx-2" />
            Instagram
          </a>
        </Col>
        <Col xs={3} className="text-left">
          <div className="d-flex">
            <Image src="logo.png" width="250px" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;