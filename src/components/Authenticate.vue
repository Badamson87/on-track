<template>
  <section class="Authenticate">
    <h3 v-if="!isLoggedIn" class="Authenticate__Item" @click="toLogin">Login</h3>
    <h3 v-else class="Authenticate__Item" @click="logout">Sign Out</h3>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import router from "@/router";

export default class Authenticate extends Vue {
  loggedIn = false;

  toLogin(): void {
    router.push('/login')
  }

  logout(): void {
    router.push('/home')
  }

  get isLoggedIn(): boolean {
    // todo this would be a getter from the store
    return this.loggedIn;
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
