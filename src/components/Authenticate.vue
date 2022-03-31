<template>
  <section class="Authenticate">
    <h3 v-if="!isLoggedIn" class="Authenticate__Item" @click="toggleLoggedIn">Login</h3>
    <h3 v-if="!isLoggedIn" class="Authenticate__Item" @click="toggleLoggedIn">Sign Up</h3>
    <h3 v-else class="Authenticate__Item" @click="toggleLoggedIn">Sign Out</h3>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Authenticate extends Vue {
  _loggedIn = false;

  toggleLoggedIn(): void {
    this._loggedIn = !this._loggedIn
  }

  get isLoggedIn(): boolean {
    return this._loggedIn;
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
.Authenticate__Item:last-of-type {
  color: red;
}
</style>
