import BreadCrumb from "@/@shared/BreadCrumbs";
import Container from "@/@ui/Container";
import React, { FC } from "react";
import TermConditionItem from "../TermConditionItem";

interface Props {
  terms: {
    title: string;
    body: string;
  }[];
}

const TermConditionContainer: FC<Props> = ({ terms }) => {
  return (
    <Container>
      <div className="py-20">
        <BreadCrumb />
        <h1 className="text-4xl font-bold mt-8 mb-3">Terms and Conditions</h1>
        <p className="text-base">
          Thank you for choosing iRepair Tech Solution for your phone and laptop
          repair needs. Before availing of our services, please carefully read
          and understand the following terms and conditions:
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {terms.map((term, idx) => {
            return <TermConditionItem {...term} index={idx} key={idx} />;
          })}
        </div>

        <p className="mt-6">
          By availing of our repair services, you acknowledge that you have
          read, understood, and agreed to be bound by these terms and
          conditions. If you have any questions or concerns, please contact us
          before proceeding with the repair.
        </p>
      </div>
    </Container>
  );
};

export default TermConditionContainer;
