'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addVendorInfo } from '@/lib/dbActions';  // Ensure this function exists and accepts {name, location, hours, owner}
import LoadingSpinner from '@/components/LoadingSpinner';
import * as yup from 'yup';

// Validation schema with startTime and endTime fields
const AddVendorInfoSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  location: yup.string().required('Location is required'),
  startTime: yup.string().required('Start time is required'),
  endTime: yup.string().required('End time is required'),
});

// Define type for form input data
type VendorInfoFormData = {
  name: string;
  location: string;
  startTime: string;
  endTime: string;
};

const generateTimeOptions = () => {
  const options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (const min of ['00', '30']) {
      const time = `${hour}:${min}`;
      options.push(time);
    }
  }
  return options;
};

const AddVendorInfoForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VendorInfoFormData>({
    resolver: yupResolver(AddVendorInfoSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  const onSubmit = async (data: VendorInfoFormData) => {
    // Combine startTime and endTime into one 'hours' string
    const hours = `${data.startTime} - ${data.endTime}`;

    const dataWithOwner = {
      name: data.name,
      location: data.location,
      hours,
      owner: currentUser,
    };

    await addVendorInfo(dataWithOwner);
    swal('Success', 'Vendor info has been added', 'success', { timer: 2000 });
    reset();
  };

  const timeOptions = generateTimeOptions();

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Add Vendor Info</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <input
                    type="text"
                    {...register('location')}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Hours</Form.Label>
                  <Row>
                    <Col>
                      <select
                        {...register('startTime')}
                        className={`form-select ${errors.startTime ? 'is-invalid' : ''}`}
                      >
                        <option value="">Start Time</option>
                        {timeOptions.map((time) => (
                          <option key={`start-${time}`} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">{errors.startTime?.message}</div>
                    </Col>
                    <Col>
                      <select
                        {...register('endTime')}
                        className={`form-select ${errors.endTime ? 'is-invalid' : ''}`}
                      >
                        <option value="">End Time</option>
                        {timeOptions.map((time) => (
                          <option key={`end-${time}`} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                      <div className="invalid-feedback">{errors.endTime?.message}</div>
                    </Col>
                  </Row>
                </Form.Group>

                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddVendorInfoForm;
