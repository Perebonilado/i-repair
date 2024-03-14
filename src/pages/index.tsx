import Accordion from "@/@shared/Accordion";
import AppHead from "@/@shared/AppHead";
import BreadCrumb from "@/@shared/BreadCrumbs";
import GradientText from "@/@shared/GradientText";
import Hamburger from "@/@shared/Hamburger";
import Button from "@/@ui/Button";
import Container from "@/@ui/Container";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import FacebookIcon from "@/icons/FacebookIcon";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <AppHead />
      <Container>
        <BreadCrumb />
        <FacebookIcon />
        <GradientText
          title="Full-service repair"
          className="text-4xl font-bold"
        />
        <Button
          title="Start fixing"
          endicon={<ArrowDiagonalUpRightIcon />}
          size="large"
        />
        <Button
          title="Start fixing"
          endicon={<ArrowDiagonalUpRightIcon />}
          size="large"
          variant="text"
        />
        <div className="bg-blue-500 p-5">
          <Button title="Start fixing" size="large" variant="secondary" />
        </div>

        <Hamburger />

        <div className="p-5">
          <Accordion
            data={[
              {
                body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum dolorem nesciunt nisi earum at ratione voluptate iste amet rem esse minima ullam cum, harum expedita eius rerum laboriosam beatae in ab veritatis. Eius quae voluptates dolorem, tempore numquam voluptate pariatur nobis esse delectus mollitia quisquam assumenda temporibus inventore. Vero?`,
                title: "Fix your truck",
                id: 1,
              },
              {
                body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum dolorem nesciunt nisi earum at ratione voluptate iste amet rem esse minima ullam cum, harum expedita eius rerum laboriosam beatae in ab veritatis. Eius quae voluptates dolorem, tempore numquam voluptate pariatur nobis esse delectus mollitia quisquam assumenda temporibus inventore. Vero?`,
                title: "Fix your truck",
                id: 2,
              },
              {
                body: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsum dolorem nesciunt nisi earum at ratione voluptate iste amet rem esse minima ullam cum, harum expedita eius rerum laboriosam beatae in ab veritatis. Eius quae voluptates dolorem, tempore numquam voluptate pariatur nobis esse delectus mollitia quisquam assumenda temporibus inventore. Vero?`,
                title: "Fix your truck",
                id: 3,
              },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
