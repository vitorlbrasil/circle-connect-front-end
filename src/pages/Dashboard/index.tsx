import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.svg";
import { ThemeButton } from "../../styles/buttons";
import {
  Headline,
  HeadlineBold,
  Title1,
  Title2,
} from "../../styles/typography";
// import { LoadingDiv, StyledDiv } from "./style";
import { VscAdd } from "react-icons/vsc";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { AnimatePresence, motion } from "framer-motion";
import DashboardFrame from "../../components/DashboardFrame";
// import { ITech } from "../../Providers/UserProvider/interfaces";
import "./styles.css";
import { ContactContext } from "../../Providers/ContactProvider";
import { IContact } from "../../Providers/UserProvider/interfaces";

const Dashboard = () => {
  const { user, loading } = useContext(UserContext);
  const { setCurrentContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleClick = (currentContact: IContact) => {
    setCurrentContact(currentContact);

    navigate("/contact-profile", { replace: true });
  };

  // if (loading) {
  //   return <LoadingDiv>carregando</LoadingDiv>;
  // }

  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {user ? (
        <>
          <DashboardFrame>
            <div className="dashboard-buttonWrapper">
              <ThemeButton
                size="small"
                color="secondary"
                onClick={() => navigate("/profile", { replace: true })}
              >
                Meu perfil
              </ThemeButton>

              <ThemeButton
                size="small"
                color="secondary"
                onClick={() => navigate("/add-contact", { replace: true })}
              >
                Adicionar contato
              </ThemeButton>
            </div>

            <ul className="contactList">
              {user.contacts.map((contact, index) => (
                <li
                  key={index}
                  className="contactCard"
                  onClick={() => handleClick(contact)}
                >
                  <p>Nome: {contact.fullName}</p>

                  {contact.phone && <p>Telefone: {contact.phone}</p>}

                  {contact.email && <p>E-mail: {contact.email}</p>}
                </li>
              ))}
            </ul>
          </DashboardFrame>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </motion.div>
  );
};

export default Dashboard;
