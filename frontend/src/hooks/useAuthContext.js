import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error(
      "value is not accessible. Please make sure to use AuthContextProvider is place at top of component"
    );
  }
  return context;
};
