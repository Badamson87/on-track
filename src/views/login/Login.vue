<template>
  <section class="login">
    <ot-form
      :item-list="listItems"
      :button-list="[buttonItems]"
      @submit="tryLogin"
    />
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import OtForm from "@/components/OtForm.vue";
import { loginFields } from "@/views/login/login.constant";
import { buttons } from "@/views/global.constant"
import AuthService from "@/services/AuthService";
import { IUser } from "@/interfaces/IUser";
import store from "@/store";

@Options({
  components: { OtForm }
})
export default class Login extends Vue {
  listItems = loginFields
  buttonItems = buttons.submit

  private login(user: IUser): void {
    // set user in store then navigate
    // todo set user
    console.log(store)
    store.

    // router.push('/userDashboard')
  }

  tryLogin(data: any): void {
    const submitRequest: IUser = {user_name: data.userName.value, password: data.password.value}
    // todo this will need to be made async and put in a .then
    //  const user = AuthService.attemptLogin(submitRequest)
    // this.login(data)
    store.dispatch('user/setUser', data);
  }



}
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
  }
</style>