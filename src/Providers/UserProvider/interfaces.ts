import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContact[] | [];
}

export interface IContact {
  id: string;
  fullName: string;
  email: string | null;
  phone: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserProviderData {
  user: IUser | null;
  loading: boolean;
  signIn: (data: FieldValues) => Promise<void>;
  signUp: (data: FieldValues) => Promise<void>;
  updateUser: (data: FieldValues, userId: string) => Promise<void>;
  deleteUser: (userId: string) => Promise<void>;
  loadUser: () => Promise<void>;
}

export interface IUserProviderProps {
  children: ReactNode;
}
