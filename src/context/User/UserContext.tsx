import React, { Dispatch, ReactNode, useReducer } from "react";
import { IUser, UserActions, userReducer, userState } from "./UserReducer";

interface UserContextProviderProps {
  children?: ReactNode;
}

const UserContext = React.createContext<{
  state: IUser;
  dispatch: Dispatch<UserActions>;
}>({
  state: userState,
  dispatch: () => null,
});

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [state, dispatch] = useReducer<React.Reducer<IUser, UserActions>>(
    userReducer,
    userState
  );
  const value = { state, dispatch };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
