import * as yup from "yup";

export const signUpFormSchema = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Formato de e-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  passwordConfirmation: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  phone: yup.string().required("Telefone obrigatória"),
});
