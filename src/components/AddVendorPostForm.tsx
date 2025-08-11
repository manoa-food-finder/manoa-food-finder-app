'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import { addVendorPost } from '@/lib/dbActions';
import { AddVendorPostSchema } from '@/lib/validationSchemas';

const AddVendorPostForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddVendorPostSchema),
  });

  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'unauthenticated') redirect('/auth/signin');

  const onSubmit = async (data: {
    name: string;
    hours: string;
    location: string;
    description: string;
    owner: string;
  }) => {
    await addVendorPost(data);
    swal('Success', 'Your vendor post has been added', 'success', { timer: 2000 });
    reset();
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Col className="text-center mb-3">
            <h2>Add Vendor Post</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group as={Row} className="mb-3" controlId="name">
                  <Form.Label column sm={2}>Name</Form.Label>
                  <Col sm={10}>
                    <input
                      type="text"
                      {...register('name')}
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{String(errors.name?.message)}</div>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="hours">
                  <Form.Label column sm={2}>Hours</Form.Label>
                  <Col sm={10}>
                    <input
                      type="text"
                      {...register('hours')}
                      className={`form-control ${errors.hours ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{String(errors.hours?.message)}</div>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="location">
                  <Form.Label column sm={2}>Location</Form.Label>
                  <Col sm={10}>
                    <input
                      type="text"
                      {...register('location')}
                      className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{String(errors.location?.message)}</div>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="description">
                  <Form.Label column sm={2}>Description</Form.Label>
                  <Col sm={10}>
                    <textarea
                      rows={3}
                      {...register('description')}
                      className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{String(errors.description?.message)}</div>
                  </Col>
                </Form.Group>

                <input type="hidden" {...register('owner')} value={currentUser} />

                <Form.Group as={Row} className="pt-3">
                  <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit" variant="primary" className="me-2">Submit</Button>
                    <Button type="button" variant="warning" onClick={() => reset()}>Reset</Button>
                  </Col>
                </Form.Group>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddVendorPostForm;
