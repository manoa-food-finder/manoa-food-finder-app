'use client';

export default function FullWidthImage() {
  return (
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4!2d-157.8167!3d21.2969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e1b3bb4b5ff%3A0x5c9b8b4b4b4b4b4b!2sManoa%2C%20Honolulu%2C%20HI!5e0!3m2!1sen!2sus!4v1642000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Manoa Area Map"
      />
    </div>
  );
}
