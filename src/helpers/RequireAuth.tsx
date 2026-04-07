import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/name.context";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const { currentUser } = useContext(UserContext);
  const jwt = localStorage.getItem("jwt");

  if (!jwt && !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}