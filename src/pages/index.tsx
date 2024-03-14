import Banner from "@/@modules/home/Banner";
import FullServiceRepair from "@/@modules/home/FullServiceRepair";
import PhoneLaptopService from "@/@modules/home/PhoneLaptopServices";
import AppLayout from "@/layout/AppLayout";
import phoneServiceData from "../json-data/phone-service.json";
import WhyChooseUs from "@/@modules/home/WhyChooseUs";
import OurCustomers from "@/@modules/home/OurCustomers";

export default function Home() {
  return (
    <>
      <AppLayout>
        <Banner />
        <FullServiceRepair />
        <PhoneLaptopService data={phoneServiceData} />
        <WhyChooseUs />
        <OurCustomers />
      </AppLayout>
    </>
  );
}
