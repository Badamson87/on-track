import { IUser } from "@/interfaces/IUser";

export default {
  attemptLogin(user: IUser): IUser {
    // api call here attach user id here on return
    return {...user}
  }
}