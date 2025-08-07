'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    setStatus(response.ok ? 'Message sent!' : 'Failed to send.');
  };

  return (
    <div>
      {/* Hero Image Section */}
      <div className="position-relative">
        <Image
          src="/hero.png"
          alt="Contact"
          width={1500}
          height={800}
          className="img-fluid w-100"
          priority
        />
        <div className="position-absolute top-50 start-50 translate-middle bg-success text-white px-4 py-2 rounded">
          <h2 className="mb-0">Contact Us</h2>
        </div>
      </div>

      {/* Contact Form */}
      <div className="container my-5">
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Send Message</button>
          <div className="mt-3 text-center">{status}</div>
        </form>
      </div>
    </div>
  );
}
