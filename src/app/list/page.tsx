import { getServerSession } from 'next-auth';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import VendorPostItem from '@/components/VendorPostItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import AddVendorPostClientWrapper from '@/components/AddVendorPostClientWrapper';

const ListPage = async () => {
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(session as any);

  const currentUserEmail = session?.user?.email || '';
  const vendorPosts = await prisma.vendorPost.findMany(); // lowercase model name

  return (
    <main>
      <Container id="list" fluid className="py-3">
        <AddVendorPostClientWrapper />
        <h1 className="mt-4">Vendor Posts</h1>
        <Row>
          {vendorPosts.map((post) => (
            <Col sm={6} md={6} lg={4} key={post.id}>
              <VendorPostItem {...post} currentUserEmail={currentUserEmail} />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
