import { createContext, useContext, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { UserContext } from "../UserProvider";
import { IContact } from "../UserProvider/interfaces";
import { IContactProviderData, IContactProviderProps } from "./interfaces";

export const ContactContext = createContext<IContactProviderData>(
  {} as IContactProviderData
);

const ContactProvider = ({ children }: IContactProviderProps) => {
  const { loadUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [currentContact, setCurrentContact] = useState<IContact | null>(null);

  const addContact = async (data: FieldValues, userId: string) => {
    try {
      await api.post(`/user/${userId}/contact`, data);

      toast.success("Contato cadastrado com sucesso", {
        autoClose: 2000,
      });

      await loadUser();

      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error("Falha no cadastro");
    }
  };

  const updateContact = async (
    data: FieldValues,
    contactId: string,
    userId: string
  ) => {
    try {
      await api.patch(`/user/${userId}/contact/${contactId}`, data);

      toast.success("Contato atualizado com sucesso!", {
        autoClose: 2000,
      });

      await loadUser();

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error("Falha na atualização do contato", {
        autoClose: 3000,
      });
    }
  };

  const deleteContact = async (contactId: string, userId: string) => {
    try {
      await api.delete(`/user/${userId}/contact/${contactId}`);

      toast.success("Contato deletado com sucesso!", {
        autoClose: 2000,
      });

      await loadUser();

      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error("Falha na remoção do contato", {
        autoClose: 3000,
      });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        currentContact,
        setCurrentContact,
        addContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
