import AppHead from "@/@shared/AppHead";
import GradientText from "@/@shared/GradientText";
import Hamburger from "@/@shared/Hamburger";
import Button from "@/@ui/Button";
import Container from "@/@ui/Container";
import ArrowDiagonalUpRightIcon from "@/icons/ArrowDiagonalUpRightIcon";
import FacebookIcon from "@/icons/FacebookIcon";

export default function Home() {
  return (
    <>
      <AppHead />
      <Container>
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
      </Container>
    </>
  );
}
