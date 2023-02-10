import { createContext, useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { IUser, IUserProviderData, IUserProviderProps } from "./interfaces";

export const UserContext = createContext<IUserProviderData>(
  {} as IUserProviderData
);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  async function loadUser() {
    try {
      const token = localStorage.getItem("@CircleConnect:token");

      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const { data } = await api.get(`/user`);

        setUser(data);
      }
    } catch (error) {
      localStorage.clear();
    }

    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const signIn = async (data: FieldValues) => {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@CircleConnect:token", token);

      toast.success("Seja bem-vindo!", {
        autoClose: 2000,
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      toast.error("Falha no login", {
        autoClose: 3000,
      });
    }
  };

  const signUp = async (data: FieldValues) => {
    try {
      await api.post("/signup", data);

      toast.success("Cadastro realizado", {
        autoClose: 2000,
      });

      navigate("/", { replace: true });
    } catch (err) {
      toast.error("Falha no cadastro");
    }
  };

  const updateUser = async (data: FieldValues, userId: string) => {
    try {
      await api.patch(`/user/${userId}`, data);

      loadUser();

      toast.success("Usuário atualizado com sucesso!", {
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Falha na atualização do usuário", {
        autoClose: 3000,
      });
    }
  };

  const deleteUser = async (userId: string) => {
    try {
      await api.delete(`/user/${userId}`);

      localStorage.clear();

      toast.success("Usuário deletado com sucesso!", {
        autoClose: 2000,
      });

      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Falha na remoção do usuário", {
        autoClose: 3000,
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        loadUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
