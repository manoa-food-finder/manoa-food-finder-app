import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FullWidthImage from '../components/FullWidthImage';
import MiddleMenu from '../components/MiddleMenu';
import Footer from '../components/Footer';

const Home = () => (
  <main>
    <Container fluid id="footer">
      <MiddleMenu />
      <FullWidthImage />
      <Footer />
    </Container>
  </main>
);

export default Home;
