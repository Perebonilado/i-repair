import Container from "@/@ui/Container";
import React, { FC, useEffect } from "react";
import PhoneServiceTitle from "../PhoneServiceTitle";
import Accordion from "@/@shared/Accordion";
import { useRouter } from "next/router";
import { ServicesNavigationIdEnum } from "@/navigation/ServicesNavigationIds";
import AnimateRightTransition from "@/transitions/AnimateRight";
import AnimateLeftTransition from "@/transitions/AnimateLeft";
import ServiceItem from "../ServiceItem";

interface Props {
  data: {
    titleOne: string;
    titleTwo: string;
    navigationId: string;
    accordionData: {
      id: number;
      body: string;
      title: string;
    }[];
  }[];
}

const PhoneLaptopService: FC<Props> = ({ data }) => {
  const router = useRouter();
  const scrollDisplacementInPx = 100;

  useEffect(() => {
    const componentIds = Object.values(ServicesNavigationIdEnum);
    const componentToViewId = componentIds.find((id) =>
      router.asPath.includes(id)
    );

    if (componentToViewId) {
      const component = document.getElementById(componentToViewId);
      if (component) {
        window.scrollTo(0, component.offsetTop - scrollDisplacementInPx);
      }
    }
  }, [router.asPath]);
  return (
    <section id="services">
      <Container>
        <div className="flex flex-col gap-16 py-20">
          {data.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return isEven ? (
              <div id={item.navigationId}>
                <AnimateRightTransition key={idx}>
                  <ServiceItem {...item} />
                </AnimateRightTransition>
              </div>
            ) : (
              <div id={item.navigationId}>
                <AnimateLeftTransition key={idx}>
                  <ServiceItem {...item} />
                </AnimateLeftTransition>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PhoneLaptopService;
