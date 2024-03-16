import React, { FC } from "react";
import PhoneServiceTitle from "../PhoneServiceTitle";
import Accordion from "@/@shared/Accordion";

interface Props {
  titleOne: string;
  titleTwo: string;
  accordionData: {
    id: number;
    body: string;
    title: string;
  }[];
}

const ServiceItem: FC<Props> = (props) => {
  return (
    <div className="flex gap-3 max-md:flex-col">
      <div style={{ flex: 1 }}>
        <PhoneServiceTitle
          titleOne={props.titleOne}
          titleTwo={props.titleTwo}
        />
      </div>
      <div style={{ flex: 1 }} className="max-md:mt-4">
        <Accordion data={props.accordionData} />
      </div>
    </div>
  );
};

export default ServiceItem;
