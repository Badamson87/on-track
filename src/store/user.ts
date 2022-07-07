import { IUser } from "@/interfaces/IUser";
import AuthService from "@/services/AuthService";
import { ActionContext } from "vuex";
import { RootState } from "@/store/index";

export class UserState {
  user: IUser = {}
}

type IUserState = ActionContext<UserState, RootState>

export const state = {
  user: {}
}


export const mutations = {
  mutations: {
    SET_USER(state: any, user: IUser) {
      state.user = user;
    }
  }
};

export const actions = {
  setUser({commit, state}: any, user: IUser ) {
    // this will be async and go in a .then.
    const x = AuthService.attemptLogin(user)
    commit('SET_USER', x);
  }
};

export const getters = {
  currentUser (state: any) {
    return state.user;
  }
}


export const user = {
  namespaced: true,
  state: state,
  mutations: {
    SET_USER(state: any, user: IUser) {
      state.user = user;
    }
  },
 actions: {
    setUser({commit, state}: any, user: IUser ) {
      // this will be async and go in a .then.
      const x = AuthService.attemptLogin(user)
      commit('SET_USER', x);
    }
  },
  getters: {
    currentUser (state: any) {
      return state;
    }
  }
};

