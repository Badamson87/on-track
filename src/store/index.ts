import { createStore } from "vuex";
import { user } from './user';

export class RootState {}
export default createStore({
  modules: {
    user,
  }
});
