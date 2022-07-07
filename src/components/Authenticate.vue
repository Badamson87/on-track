<template>
  <section class="Authenticate">
    <h3 v-if="user?.user?.id" class="Authenticate__Item" @click="logout">Sign Out</h3>
    <h3 v-else class="Authenticate__Item" @click="toLogin">Login</h3>
    <h1>{{ user?.id }}</h1>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import router from "@/router";
import store from "@/store";
import { mapState } from "vuex";

@Options({
  computed: mapState({
    user: 'user.user',
  })
})
export default class Authenticate extends Vue {
  testUser: any;

  toLogin(): void {
    router.push('/login')
  }

  logout(): void {
    store.dispatch('user/setUser', null);
    router.push('/').catch((err: Error) => {
      // todo handle error
      console.log(err)
    })
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
