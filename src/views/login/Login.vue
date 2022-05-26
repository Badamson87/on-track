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
import store from "@/store";
import router from "@/router";

@Options({
  components: { OtForm }
})
export default class Login extends Vue {
  listItems = loginFields
  buttonItems = buttons.submit


  tryLogin(data: any): void {
    store.dispatch('user/setUser', {...data, id: 1});
    router.push('/userDashboard').catch((err: Error) => {
      // todo handle error
      console.log(err)
    })
  }



}
</script>

<style scoped>
  .login {
    display: flex;
    justify-content: center;
  }
</style>