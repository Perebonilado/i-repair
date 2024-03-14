import Container from "@/@ui/Container";
import React, { FC } from "react";
import PhoneServiceTitle from "../PhoneServiceTitle";
import Accordion from "@/@shared/Accordion";

interface Props {
  data: {
    titleOne: string;
    titleTwo: string;
    accordionData: {
      id: number;
      body: string;
      title: string;
    }[];
  }[];
}

const PhoneLaptopService: FC<Props> = ({ data }) => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-16 py-20">
          {data.map((item, idx) => {
            return (
              <div key={idx} className="flex gap-3 max-md:flex-col">
                <div style={{ flex: 1 }}>
                  <PhoneServiceTitle
                    titleOne={item.titleOne}
                    titleTwo={item.titleTwo}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <Accordion data={item.accordionData} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PhoneLaptopService;
