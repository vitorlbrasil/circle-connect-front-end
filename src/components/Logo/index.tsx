import { TbChartCircles } from "react-icons/tb";
import "./styles.css";

const Logo = () => {
  return (
    <div className="logoDiv">
      <h1>CircleConnect</h1>
      <TbChartCircles color="var(--primary-color)" size="2rem" />
    </div>
  );
};

export default Logo;
