import * as yup from "yup";

export const updateUserFormSchema = yup.object().shape({
  fullName: yup.string(),
  password: yup
    .string()
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
    .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não conferem"),
  phone: yup.string(),
});
