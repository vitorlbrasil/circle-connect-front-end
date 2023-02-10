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
import { updateContactFormSchema } from "../../validators/updateContactFormSchema";
import { ContactContext } from "../../Providers/ContactProvider";

const ContactProfile = () => {
  const { user, updateUser, deleteUser } = useContext(UserContext);
  const { currentContact, deleteContact, updateContact } =
    useContext(ContactContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateContactFormSchema),
  });

  // const handleClick = () => {
  //   localStorage.clear();

  //   navigate("/", { replace: true });
  // };

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
      {currentContact ? (
        <>
          <DashboardFrame>
            <div className="contactProfile-buttonWrapper">
              <ThemeButton
                size="small"
                color="secondary"
                onClick={() => navigate("/dashboard", { replace: true })}
              >
                Voltar
              </ThemeButton>

              <ThemeButton
                type="button"
                size="small"
                color="red"
                onClick={() => deleteContact(currentContact.id, user!.id)}
              >
                Excluir contato
              </ThemeButton>
            </div>

            <FormContainer>
              <form
                onSubmit={handleSubmit((data) =>
                  updateContact(data, currentContact.id, user!.id)
                )}
              >
                <div className="inputWrapper">
                  <label htmlFor="fullName">Nome</label>
                  <input
                    id="fullName"
                    defaultValue={currentContact.fullName}
                    {...register("fullName")}
                  />
                  <Alert>
                    <>{errors.fullName?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    id="phone"
                    defaultValue={currentContact.phone || ""}
                    {...register("phone")}
                  />
                  <Alert>
                    <>{errors.phone?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    defaultValue={currentContact.email || ""}
                    {...register("email")}
                  />
                  <Alert>
                    <>{errors.email?.message}</>
                  </Alert>
                </div>

                <ThemeButton type="submit" size="big" color="secondary">
                  Atualizar
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

export default ContactProfile;
