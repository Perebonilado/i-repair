import Button from "@/@ui/Button";
import Container from "@/@ui/Container";
import React, { FC } from "react";
import CustomerReviewItem from "../CustomerReviewItem";

const reviews = [
  "I was worried  about waiting too long but it was super convenient getting my iPhone fixed here",
  "Really good customer service here, i’d recommend them to anyone looking for repairs.",
  "Thought I had to completely replace my laptop, but they explained the issue and restored it at a decent price.",
];

const OurCustomers: FC = () => {
  return (
    <section className="bg-[#1363FF]">
      <Container>
        <div className="bg-[#EAF1FF] py-20 text-center">
          <h3 className="text-3xl font-bold">Our Customers</h3>
          <p className="text-base font-semibold mt-4">
            See what our customers have to say about our service.
          </p>

          <div className="flex items-center justify-center gap-28 mt-16 flex-wrap">
            {reviews.map((rev, idx) => (
              <CustomerReviewItem review={rev} key={idx} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center text-center text-white py-14">
          <p className="font-semibold">
            The Trusted tech repair service in the DMV region.
          </p>
          <p className="text-sm mt-8 mb-3">For pricing and inquiries:</p>
          <Button
            title="Contact us"
            variant="secondary"
            size="large"
            className="!px-14"
          />
        </div>
      </Container>
    </section>
  );
};

export default OurCustomers;
