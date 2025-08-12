/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div>
      {/* Contact Form */}
      <div className="container my-5">
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              id="contact-name"
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
              id="contact-email"
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
              id="contact-message"
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
