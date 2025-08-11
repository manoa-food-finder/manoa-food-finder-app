'use client';

import Image from 'next/image';

export default function HelpSection() {
  return (
    <section className="bg-success text-white py-5">
      <div className="container">
        <h3 className="mb-4">Help</h3>

        <p>
          <strong>Q: </strong>
          How do I navigate the map?
        </p>
        <p>
          <strong>A: </strong>
          Use the zoom and pan controls to maneuver around the map.
        </p>

        <p>
          <strong>Q: </strong>
          How can I view vendor postings?
        </p>
        <p>
          <strong>A: </strong>
          Click on the &quot;POSTINGS&quot; section in the menu to view all available vendor postings.
        </p>
        <div className="my-3">
          <Image
            src="/ph.png"
            alt="How to view food postings"
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>

        <p>
          <strong>Q: </strong>
          How do I contact vendors?
        </p>
        <p>
          <strong>A: </strong>
          Once you find a vendor from the postings, you can view their descriptions to be able to locate and
          contact them.
        </p>
        <div className="my-3">
          <Image
            src="/desc.png"
            alt="How to view food postings"
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>

        <p>
          <strong>Q: </strong>
          What should I do if I run into issues?
        </p>
        <p>
          <strong>A: </strong>
          Contact us through the &quot;CONTACT US&quot; section to report any issues or get assistance.
          Alternatively, you can use the contact information provided in the footer to reach out directly.
        </p>

        <p>
          <strong>Q: </strong>
          What should I do if there is an incorrect or misleading vendor post?
        </p>
        <p>
          <strong>A: </strong>
          Contact us through the &quot;CONTACT US&quot; section and our admins will look into it,
          and take relevant action.  Alternatively, you can use the contact information provided
          in the footer to reach out directly.
        </p>

        <p className="mt-4">
          For further assistance, email us at
          {' '}
          <a className="text-white" href="mailto:manoaFoodFinder.edu">
            manoaFoodFinder.edu
          </a>
          .
        </p>
      </div>
    </section>
  );
}
