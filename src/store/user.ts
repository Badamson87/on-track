import { IUser } from "@/interfaces/IUser";
import UserService from "@/services/UserService";

export const namespaced = true

export default {
  state: {
    user: {}
  },
  mutations: {
    // SET_USER(state, user) {
    //   console.log('hit mutation')
    //   state.user = user;
    // }
  },
 actions: {
    // setUser({ commit: any }, user: IUser) {
    //   console.log('hit action')
    //   commit('SET_USER', user);
    // }
  },
};
