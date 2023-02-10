import { ReactNode } from "react";
import SmallLogo from "../SmallLogo";
import { DashboardFrameDiv } from "./styles";

interface IDashboardFrameProps {
  children: ReactNode;
}

const DashboardFrame = ({ children }: IDashboardFrameProps) => {
  return (
    <DashboardFrameDiv>
      <SmallLogo />
      <div>{children}</div>
    </DashboardFrameDiv>
  );
};

export default DashboardFrame;
