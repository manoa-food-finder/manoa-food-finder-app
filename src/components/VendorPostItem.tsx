'use client';

import type { VendorPost } from '@prisma/client';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { deleteVendorPost } from '@/lib/dbActions';
import swal from 'sweetalert';

type Props = VendorPost & {
  currentUserEmail: string;
};

const VendorPostItem: React.FC<Props> = ({
  id,
  name,
  hours,
  location,
  description,
  owner,
  currentUserEmail,
}) => {
  const handleDelete = async () => {
    const willDelete = await swal({
      title: 'Are you sure?',
      text: 'This post will be permanently deleted.',
      icon: 'warning',
      buttons: ['Cancel', 'Delete'],
      dangerMode: true,
    });

    if (willDelete) {
      await deleteVendorPost(id);
      window.location.reload();
    }
  };

  return (
    <div className="card mb-4" style={{ backgroundColor: '#f8f9fa', height: '100%' }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          <strong>Hours:</strong>
          {hours}
          <br />
          <strong>Location:</strong>
          {location}
          <br />
          <strong>Description:</strong>
          {description}
        </p>
        {owner === currentUserEmail && (
          <div className="d-flex gap-2 mt-3">
            <a href={`/edit-vendor/${id}`} className="btn btn-primary btn-sm">
              Edit
            </a>
            <Button variant="danger" size="sm" onClick={handleDelete}>
              <Trash />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorPostItem;
