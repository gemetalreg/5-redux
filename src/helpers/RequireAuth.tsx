import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const currentUser = useAppSelector(state => state.user.currentUser);
  const jwt = localStorage.getItem("jwt");

  if (!jwt && !currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}