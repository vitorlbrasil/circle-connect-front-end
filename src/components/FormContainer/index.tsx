import { ReactNode } from "react";
import { StyledFormContainer } from "./styles";

interface IFormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: IFormContainerProps) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};

export default FormContainer;
