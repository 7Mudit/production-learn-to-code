import Heading from "@/components/about/Heading";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <div className="bg-white max-w-maxContent mx-auto dark:bg-black text-gray-900 dark:text-gray-200 p-4">
        {/* <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">
          Privacy Policy for LearnToCode
        </h1> */}
        <Heading>Privacy Policy</Heading>
        <section className="my-10">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Effective Date: 2<sup>nd</sup> Feb 2024
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Welcome to LearnToCode, a platform dedicated to providing free
            educational content on coding. This Privacy Policy outlines how we
            collect, use, protect, and share information gathered from users of
            the Site.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            1. Information Collection
          </h2>
          <div className="pl-4 mb-4">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              a. Browsing Information:
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We automatically collect information that your browser sends
              whenever you visit our Site.
            </p>

            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              b. Payment and Freelancing Service Information:
            </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              We require you to provide certain personally identifiable
              information necessary for the transaction when you purchase a plan
              or engage in our freelancing services.
            </p>
          </div>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            2. Use of Information
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The information we collect is used in various ways, including to
            provide and maintain our Site, to improve and personalize your
            experience, and to process transactions.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We use cookies to enhance your experience. You can choose to turn
            off all cookies via your browser settings.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            4. Sharing Your Information
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We do not sell, trade, or otherwise transfer to outside parties your
            personally identifiable information.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            5. Third-Party Links
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Occasionally, we may include third-party products or services on our
            Site. These third-party sites have separate and independent privacy
            policies.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0">
            6. Changes to This Privacy Policy
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We may update our Privacy Policy from time to time.
          </p>
        </section>

        <div className="mt-4">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            If you have any questions about this Privacy Policy, please{" "}
            <Link
              href="/contact"
              className="underline underline-offset-2 text-blue-100"
            >
              contact us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
