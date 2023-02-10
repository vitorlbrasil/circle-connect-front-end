import { useContext } from "react";
import { ThemeButton } from "../../styles/buttons";
// import { LoadingDiv, StyledDiv } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import { motion } from "framer-motion";
import DashboardFrame from "../../components/DashboardFrame";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormContainer from "../../components/FormContainer";
import { Alert } from "../../styles/typography";
import { addContactFormSchema } from "../../validators/addContactFormSchema";
import { ContactContext } from "../../Providers/ContactProvider";

const AddContact = () => {
  const { user } = useContext(UserContext);
  const { addContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addContactFormSchema),
  });

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
            <div className="addContact-buttonWrapper">
              <ThemeButton
                size="small"
                color="secondary"
                onClick={() => navigate("/dashboard", { replace: true })}
              >
                Voltar
              </ThemeButton>
            </div>

            <FormContainer>
              <form
                onSubmit={handleSubmit((data) => addContact(data, user.id))}
              >
                <div className="inputWrapper">
                  <label htmlFor="fullName">Nome</label>
                  <input
                    id="fullName"
                    placeholder="Digite o nome"
                    {...register("fullName")}
                  />
                  <Alert>
                    <>{errors.fullName?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    placeholder="Digite o e-mail"
                    {...register("email")}
                  />
                  <Alert>
                    <>{errors.email?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    id="phone"
                    placeholder="Digite o telefone"
                    {...register("phone")}
                  />
                  <Alert>
                    <>{errors.phone?.message}</>
                  </Alert>
                </div>

                <ThemeButton type="submit" size="big" color="secondary">
                  Criar contato
                </ThemeButton>
              </form>
            </FormContainer>
          </DashboardFrame>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </motion.div>
  );
};

export default AddContact;
