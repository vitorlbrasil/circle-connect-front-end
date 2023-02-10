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
import { updateUserFormSchema } from "../../validators/updateUserFormSchema";

const MyProfile = () => {
  const { user, updateUser, deleteUser } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserFormSchema),
  });

  const handleLogout = () => {
    localStorage.clear();

    navigate("/", { replace: true });
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
                onClick={() => navigate("/dashboard", { replace: true })}
              >
                Voltar
              </ThemeButton>

              <ThemeButton size="small" color="red" onClick={handleLogout}>
                Sair
              </ThemeButton>
            </div>

            <FormContainer>
              <form
                onSubmit={handleSubmit((data) => updateUser(data, user.id))}
              >
                <div className="inputWrapper">
                  <label htmlFor="fullName">Nome</label>
                  <input
                    id="fullName"
                    defaultValue={user.fullName}
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
                    defaultValue={user.phone}
                    {...register("phone")}
                  />
                  <Alert>
                    <>{errors.phone?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="password">Senha</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Digite sua nova senha"
                    {...register("password")}
                  />
                  <Alert>
                    <>{errors.password?.message}</>
                  </Alert>
                </div>

                <div className="inputWrapper">
                  <label htmlFor="passwordConfirmation">Confirme a senha</label>
                  <input
                    type="password"
                    id="passwordConfirmation"
                    placeholder="Digite novamente sua nova senha"
                    {...register("passwordConfirmation")}
                  />
                  <Alert>
                    <>{errors.passwordConfirmation?.message}</>
                  </Alert>
                </div>

                <ThemeButton type="submit" size="big" color="secondary">
                  Atualizar
                </ThemeButton>
              </form>
            </FormContainer>

            <ThemeButton
              type="button"
              size="big"
              color="red"
              onClick={() => deleteUser(user.id)}
            >
              Excluir conta
            </ThemeButton>
          </DashboardFrame>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </motion.div>
  );
};

export default MyProfile;
