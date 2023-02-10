import { TbChartCircles } from "react-icons/tb";
import { SmallLogoContainer } from "./styles";

const SmallLogo = () => {
  return (
    <SmallLogoContainer>
      <h1>CircleConnect</h1>
      <TbChartCircles color="var(--grey-0)" size="1.25rem" />
    </SmallLogoContainer>
  );
};

export default SmallLogo;
