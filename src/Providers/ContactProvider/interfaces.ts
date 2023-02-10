import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { IContact } from "../UserProvider/interfaces";

export interface IContactResponse {
  id: string;
  fullName: string;
  email: string | null;
  phone: string | null;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: IContactUserResponse;
}

export interface IContactUserResponse {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  isAdm: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContactProviderData {
  currentContact: IContact | null;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContact | null>>;
  addContact: (data: FieldValues, userId: string) => Promise<void>;
  updateContact: (
    data: FieldValues,
    contactId: string,
    userId: string
  ) => Promise<void>;
  deleteContact: (contactId: string, userId: string) => Promise<void>;
}

export interface IContactProviderProps {
  children: ReactNode;
}
