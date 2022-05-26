import { IUser } from "@/interfaces/IUser";

export default {
  attemptLogin(user: IUser): IUser {
    // api call here
    return {...user, id: 1}
  }
}