import Container from "@/@ui/Container";
import React, { FC } from "react";

const OurCustomers: FC = () => {
  return (
    <section className="bg-[#1363FF]">
      <Container>
        <div className="bg-[#EAF1FF] min-h-screen py-14 text-center">
          <h3 className="text-3xl font-bold">Our Customers</h3>
          <p className="text-base font-semibold mt-4">See what our customers have to say about our service.</p>
        </div>
      </Container>
    </section>
  );
};

export default OurCustomers;
