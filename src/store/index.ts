import { createStore } from "vuex";
import * as user from './user';

export default createStore({
  modules: {
    user,
  }
  // state: {
  //   loggedIn: false,
  // },
  // mutations: {},
  // actions: {},
  // modules: {},
});
