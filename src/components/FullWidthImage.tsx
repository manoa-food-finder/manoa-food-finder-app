'use client';

import Image from 'next/image';

export default function HelpSection() {
  return (
    <section className="bg-success text-white py-5">
      <div className="container">
        <h3 className="mb-4">Help</h3>
        <p>
          <strong>Q: </strong>
          How can I create a new vendor posting?
        </p>
        <p>
          <strong>A: </strong>
          Under the &quot;POSTINGS&quot; section in the menu, click the &quot;Create New Posting&quot; option.
          This will then take you to a form where you can enter all relevant details of your vendor posting.
          Once you are satisfied with your posting, click the &quot;Submit&quot; button to create it.
        </p>
        <div className="my-3">
          <Image
            src="/vendorposting.png"
            alt="How to create a new vendor posting"
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>
        <div className="my-3">
          <Image
            src="/newpost.png"
            alt="How to create a new vendor posting pt.2"
            width={600}
            height={400}
            className="img-fluid rounded"
          />
        </div>
        <p>
          <strong>Q: </strong>
          How do I edit my posting?
        </p>
        <p>
          <strong>A: </strong>
          You can click on the blue edit button under your posting in the &quot;View Postings&quot; section.
          This will allow you to modify details of your posting.
        </p>
        <div className="my-3">
          <Image
            src="/edits(1).png"
            alt="How to edit a vendor posting"
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
      </div>
    </section>
  );
}
