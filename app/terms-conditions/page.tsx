import Heading from "@/components/about/Heading";
import Link from "next/link";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className=" bg-white dark:bg-black text-gray-900 dark:text-gray-200 p-8 rounded-lg shadow">
      <Heading>Terms and Conditions</Heading>
      {/* <h1 className="text-2xl font-bold mb-4"></h1> */}

      <section className="space-y-4 mt-10">
        <p>
          Welcome to LearnToCode! These terms and conditions outline the rules
          and regulations for the use of LearnToCode&apos;s Website.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use LearnToCode if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>

        <h2 className="text-xl font-semibold">Cookies</h2>
        <p>
          The website uses cookies to help personalize your online experience.
          By accessing LearnToCode, you agreed to use the required cookies.
        </p>

        <h2 className="text-xl font-semibold">License</h2>
        <p>
          Unless otherwise stated, LearnToCode and/or its licensors own the
          intellectual property rights for all material on LearnToCode. All
          intellectual property rights are reserved. You may access this from
          LearnToCode for your own personal use subjected to restrictions set in
          these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul className="list-disc pl-8">
          <li>Republish material from LearnToCode</li>
          <li>Sell, rent or sub-license material from LearnToCode</li>
          <li>Reproduce, duplicate or copy material from LearnToCode</li>
          <li>Redistribute content from LearnToCode</li>
        </ul>

        <h2 className="text-xl font-semibold">User Comments</h2>
        <p>
          This agreement shall begin on the date hereof. Parts of this website
          offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. LearnToCode does not
          filter, edit, publish or review Comments prior to their presence on
          the website. Comments do not reflect the views and opinions of
          LearnToCode, its agents and/or affiliates.
        </p>

        <h2 className="text-xl font-semibold">Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior
          written approval:
        </p>
        <ul className="list-disc pl-8">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
          </li>
          <li>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">Content Liability</h2>
        <p>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>

        <h2 className="text-xl font-semibold">Your Privacy</h2>
        <p>
          Please read our{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 text-blue-100"
          >
            Privacy Policy
          </Link>{" "}
          .
        </p>

        <h2 className="text-xl font-semibold">Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>

        <h2 className="text-xl font-semibold">
          Removal of links from our website
        </h2>
        <p>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>

        <h2 className="text-xl font-semibold">Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <ul className="list-disc pl-8">
          <li>
            limit or exclude our or your liability for death or personal injury;
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </li>
          <li>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ul>

        <p className="pt-4">
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </p>

        <p className="pt-4">
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
