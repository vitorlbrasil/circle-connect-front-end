import * as yup from "yup";

export const addContactFormSchema = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório"),
  email: yup.string().email("Formato de e-mail inválido"),
  phone: yup.string(),
});
