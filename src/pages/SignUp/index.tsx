import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../Providers/UserProvider";

import FormContainer from "../../components/FormContainer";
import { Headline, Alert, Title1 } from "../../styles/typography";
import { ThemeButton } from "../../styles/buttons";
import { StyledDiv } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema } from "../../validators/signUpFormSchema";
import { motion } from "framer-motion";
import { motionDivStyle } from "../../styles/motionDivStyle";
import Logo from "../../components/Logo";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });

  return (
    <motion.div
      style={motionDivStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <StyledDiv>
        <div className="logoWrapper">
          <Logo />
          <ThemeButton
            size="small"
            color="secondary"
            onClick={() => navigate("/", { replace: true })}
          >
            Voltar
          </ThemeButton>
        </div>

        <FormContainer>
          <Title1>Crie sua conta</Title1>
          <Headline>Todos os seus contatos num só lugar!</Headline>

          <form onSubmit={handleSubmit(signUp)}>
            <div className="inputWrapper">
              <label htmlFor="fullName">Nome</label>
              <input
                id="fullName"
                placeholder="Digite seu nome"
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
                placeholder="Digite seu e-mail"
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
                placeholder="Digite seu telefone"
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
                placeholder="Digite sua senha"
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
                placeholder="Digite novamente sua senha"
                {...register("passwordConfirmation")}
              />
              <Alert>
                <>{errors.passwordConfirmation?.message}</>
              </Alert>
            </div>

            <ThemeButton type="submit" size="big" color="secondary">
              Cadastrar
            </ThemeButton>
          </form>
        </FormContainer>
      </StyledDiv>
    </motion.div>
  );
};

export default SignUp;
