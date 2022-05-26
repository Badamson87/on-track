<template>
  <section class="Authenticate">
    <h3 v-if="!isLoggedIn" class="Authenticate__Item" @click="toLogin">Login</h3>
    <h3 v-else class="Authenticate__Item" @click="logout">Sign Out</h3>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";
import store from "@/store";
import { Component, Watch } from "vue-property-decorator";

export default class Authenticate extends Vue {

  toLogin(): void {
    router.push('/login')
  }

  logout(): void {
    console.log('hit logout')
    store.dispatch('user/setUser', {});
    router.push('/home').catch((err: Error) => {
      // todo handle error
      console.log(err)
    })
  }

  @Watch('loggedIn', { immediate: true })
  isLoggedIn(): boolean {
    const x = store.getters['user/isLoggedIn']
    console.log(x);
    return x?.id
  }
}

</script>

<style scoped lang="scss">
.Authenticate {
  display: flex;
}
.Authenticate__Item {
  padding-right: .5rem;
  padding-left: .5rem;
}
//.Authenticate__Item:last-of-type {
//  color: red;
//}
</style>
