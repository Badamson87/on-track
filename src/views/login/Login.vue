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
import router from "@/router";
import OtForm from "@/components/OtForm.vue";
import { loginFields } from "@/views/login/login.constant";
import { buttons } from "@/views/global.constant"

@Options({
  components: { OtForm }
})
export default class Login extends Vue {
  listItems = loginFields
  buttonItems = buttons.submit


  tryLogin(data: any): void {
    const submitRequest = {name: data.userName.value, password: data.password.value}
    // this would be auth checks before login
    if (submitRequest) {
      this.login()
    }
  }

  login(): void {
    // set user in store then navigate
    // todo set user
    router.push('/userDashboard')
  }

}
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
  }
</style>