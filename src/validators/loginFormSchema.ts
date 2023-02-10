import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Formato de e-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});
