import TermConditionContainer from "@/@modules/terms-and-conditions/TermConditionContainer";
import AppLayout from "@/layout/AppLayout";
import { NextPage } from "next";
import React from "react";
import termConditionData from "../json-data/term-condition.json";
import AppHead from "@/@shared/AppHead";

const Policy: NextPage = () => {
  return (
    <>
      <AppHead title="Our Policy" />
      <AppLayout>
        <TermConditionContainer terms={termConditionData} />
      </AppLayout>
    </>
  );
};

export default Policy;
