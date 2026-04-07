import React from "react"


export interface NameContextProps {
    children?: React.ReactNode;
}

export interface UserContextType {
  currentUser: string | null; // Замените `any` на конкретный тип пользователя
  setCurrentUser: (user: string | null) => void;
}
 