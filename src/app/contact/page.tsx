import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ContactUs from '@/components/ContactUs';

const ContactPage = async () => (
  <main>
    <Container fluid id="footer">
      <ContactUs />
    </Container>
  </main>
);

export default ContactPage;
