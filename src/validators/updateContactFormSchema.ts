import * as yup from "yup";

export const updateContactFormSchema = yup.object().shape({
  fullName: yup.string(),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Formato de e-mail inválido"),
  phone: yup.string(),
});
