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
          <h3 className="text-4xl font-bold">Our Customers</h3>
          <p className="text-lg mt-4">
            See what our customers have to say about our service.
          </p>

          <div className="flex items-center justify-center gap-16 mt-16 flex-wrap">
            {reviews.map((rev, idx) => (
              <CustomerReviewItem review={rev} key={idx} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurCustomers;
