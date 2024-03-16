import Button from "@/@ui/Button";
import Container from "@/@ui/Container";
import React, { FC } from "react";

const ContactUs: FC = () => {
  return (
    <section className="bg-[#1363FF] border-b">
      <Container>
        <div className="flex flex-col items-center text-center text-white py-14">
          <p className="font-semibold text-3xl">
            The Trusted tech repair service in the DMV region.
          </p>
          <p className="text-lg mt-8 mb-3">For pricing and inquiries:</p>
          <Button
            title="Contact us"
            variant="secondary"
            size="large"
            className="!px-24"
          />
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
