import { ReactNode } from "react";
import ContactProvider from "./ContactProvider";
import UserProvider from "./UserProvider";

interface IProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return (
    <UserProvider>
      <ContactProvider>{children}</ContactProvider>
    </UserProvider>
  );
};

export default Providers;
