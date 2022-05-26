import { IUser } from "@/interfaces/IUser";
import UserService from "@/services/UserService";
import AuthService from "@/services/AuthService";
import { ActionContext } from "vuex";
import router from "@/router";
import { RootState } from "@/store/index";

class UserState {
  user: IUser = {}
}

type IUserState = ActionContext<UserState, RootState>

export const user = {
  namespaced: true,
  state: new UserState(),
  mutations: {
    SET_USER(state: UserState, user: IUser) {
      state.user = user;
    }
  },
 actions: {
    setUser({commit, state}: IUserState, user: IUser ) {
      // this will be async and go in a .then.
      const x = AuthService.attemptLogin(user)
      commit('SET_USER', x);
    }
  },
  getters: {
    isLoggedIn ({state}: IUserState) {
      console.log('entered is logged in')
      return state?.user;
    }
  }
};
