import Heading from "@/components/about/Heading";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-200 p-6 rounded-lg shadow">
      <Heading> Refund and Cancellation Policy</Heading>

      <section className="space-y-4 mt-10">
        <p>
          At LearnToCode, we are committed to ensuring satisfaction for all our
          customers. This policy outlines the circumstances under which a refund
          may be issued for our freelancing services and digital products, and
          how to cancel a service or product purchase.
        </p>

        <h2 className="text-xl font-semibold">Cancellation Policy</h2>
        <p>
          If you wish to cancel your purchase , please review the following
          conditions:
        </p>
        <ul className="list-disc pl-6">
          <li>
            For ongoing freelancing services, customers may cancel within the
            first 2 days of the start date for a full refund, provided that no
            substantial work has been completed. The refund will not include any
            fees, such as processing fees, bank fees, or any other charges even
            if the service or product is eligible for a refund.
          </li>
          <li>
            For digital products, cancellation is not possible once the download
            or access link has been provided.
          </li>
          <li>
            Proof of issue is required when requesting a refund, especially for
            claims of dissatisfaction with services or digital product defects.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Refund Policy</h2>
        <p>
          We strive to provide the highest quality in all our offerings.
          However, under certain conditions, if you are not satisfied with our
          services or products, you may be eligible for a refund.
        </p>
        <ul className="list-disc pl-6">
          <li>
            Refunds for freelancing services must be requested within 2 days of
            the service start date or product purchase, accompanied by a
            detailed explanation of the issue.
          </li>
          <li>
            Refunds for digital products can only be issued if you have not
            downloaded or accessed the product.
          </li>
          <li>
            All refund requests will be thoroughly reviewed on a case-by-case
            basis. Upon approval, refunds will be processed within 7 to 14
            business days.
          </li>
        </ul>

        <p>
          Please note, we reserve the right to deny refund requests if the
          service or product has been substantially utilized or if any terms of
          service have been violated.
        </p>

        <h2 className="text-xl font-semibold">
          How to Request a Cancellation or Refund
        </h2>
        <p>
          To request a cancellation or refund, please{" "}
          <Link
            href="/contact"
            className="underline underline-offset-2 text-blue-100"
          >
            contact us.
          </Link>{" "}
          with your order number and a detailed explanation of your reason for
          the request. Our team will get back to you as soon as possible with
          the next steps.
        </p>

        <p className="pt-4">
          We reserve the right to modify this Refund and Cancellation Policy at
          any time, so please review it frequently. Changes and clarifications
          will take effect immediately upon their posting on the website.
        </p>
      </section>
    </div>
  );
};

export default Page;
