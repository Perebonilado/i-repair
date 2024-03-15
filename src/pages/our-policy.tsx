import TermConditionContainer from "@/@modules/terms-and-conditions/TermConditionContainer";
import AppLayout from "@/layout/AppLayout";
import React from "react";
import termConditionData from "../json-data/term-condition.json";
import AppHead from "@/@shared/AppHead";

export default function Policy() {
  return (
    <>
      <AppHead title="Our Policy" />
      <AppLayout>
        <TermConditionContainer terms={termConditionData} />
      </AppLayout>
    </>
  );
}

