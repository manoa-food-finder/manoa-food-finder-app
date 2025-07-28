import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import FullWidthImage from '../components/FullWidthImage';
import MiddleMenu from '../components/MiddleMenu';
import Footer from '../components/Footer';

const Home = () => (
  <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
    <Container fluid style={{ flex: 1 }}>
      <MiddleMenu />
      <FullWidthImage />
    </Container>
    <Footer />
  </main>
);

export default Home;
