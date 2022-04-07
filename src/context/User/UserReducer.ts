export enum Gender {
  MALE = "male",
  FEMALE = "female",
  NO = "Prefer not to disclose",
}

export interface IUser {
  id: number | null;
  uername: String | null;
  email: String | null;
  firstname: String | null;
  lastname: String | null;
  gender?: Gender;
  dob?: String | null;
  isSuperUser: boolean;
  relatedUsers: number[] | null;
  theme: String;
  avatar?: FormData | String;
  quickActions?: string[];
  // location,
  // occupation,
}

export type UserActions =
  | { type: "LOGIN"; payload: any }
  | { type: "LOGOUT" }
  | { type: "REGISTER"; payload: any }
  | { type: "UNREGISTER"; payload: { userId: number } }
  | { type: "UPDATE"; payload: IUser };

export const userState: IUser = {
  id: null,
  uername: null,
  email: null,
  firstname: null,
  lastname: null,
  gender: Gender.NO,
  dob: null,
  isSuperUser: false,
  relatedUsers: [],
  theme: "light",
  avatar: "www.",
};

export function userReducer(state: IUser, action: UserActions): IUser {
  switch (action.type) {
    case "LOGIN":
      return handleLogin(state, action);
    default:
      throw new Error("Reducer error");
  }
}

function handleLogin(state: IUser, action: UserActions): IUser {
  return {
    id: 123,
    uername: "test",
    email: "test@test.com",
    firstname: "slim",
    lastname: "shady",
    gender: Gender.MALE,
    dob: "07/12/1990",
    isSuperUser: true,
    relatedUsers: [3, 2, 5],
    theme: "dark",
    avatar: "www.",
  };
}
