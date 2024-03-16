import TermConditionContainer from "@/@modules/terms-and-conditions/TermConditionContainer";
import AppLayout from "@/layout/AppLayout";
import React from "react";
import termConditionData from "../json-data/term-condition.json";
import AppHead from "@/@shared/AppHead";
import FadeInTransition from "@/transitions/FadeIn";

export default function Policy() {
  return (
    <FadeInTransition>
      <AppHead title="Our Policy" />
      <AppLayout>
        <TermConditionContainer terms={termConditionData} />
      </AppLayout>
    </FadeInTransition>
  );
}

