'use client';

import Image from 'next/image';

export default function FullWidthImage() {
  return (
    <div className="position-relative">
      <Image
        src="/hero.png"
        alt="Food Court"
        width={1500}
        height={800}
        className="img-fluid w-100"
        priority
      />
      <div className="position-absolute top-50 start-50 translate-middle bg-success text-white px-4 py-2 rounded">
        <h2 className="mb-0">WELCOME USER</h2>
      </div>
    </div>
  );
}
