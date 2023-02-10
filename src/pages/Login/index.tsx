import FormContainer from "../../components/FormContainer";
import { ThemeButton } from "../../styles/buttons";
import { HeadlineBold, Alert, Title1 } from "../../styles/typography";
import { StyledDiv } from "./styles";

import { UserContext } from "../../Providers/UserProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../validators/loginFormSchema";
import { motion } from "framer-motion";
import Logo from "../../components/Logo";
import { motionDivStyle } from "../../styles/motionDivStyle";

const Login = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
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
        <Logo />

        <FormContainer>
          <Title1>Login</Title1>

          <form onSubmit={handleSubmit(signIn)}>
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
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <Alert>
                <>{errors.password?.message}</>
              </Alert>
            </div>

            <ThemeButton type="submit" size="big" color="secondary">
              Entrar
            </ThemeButton>
          </form>

          <div className="buttonWrapper">
            <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
            <ThemeButton
              size="big"
              color="grey"
              onClick={() => navigate("/signup")}
            >
              Cadastre-se
            </ThemeButton>
          </div>
        </FormContainer>
      </StyledDiv>
    </motion.div>
  );
};

export default Login;
