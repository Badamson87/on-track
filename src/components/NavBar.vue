<template>
  <section class="NavBar__Header">
<!--    TODO replace this with logo-->
    <h3 class="NavBar__Header__Title">On-Track</h3>
<!--    TODO make this stick in the middle and stop moving-->
    <h3 class="NavBar__Header__Title">Welcome To Church</h3>
<!--    TODO make this its own component-->
    <div class="NavBar__Header__AuthButtons">
      <h3 v-if="!isLoggedIn" class="NavBar__Header__Item" @click="toggleLoggedIn">Login</h3>
      <h3 v-if="!isLoggedIn" class="NavBar__Header__Item" @click="toggleLoggedIn">Sign Up</h3>
      <h3 v-else class="NavBar__Header__Item" @click="toggleLoggedIn">Sign Out</h3>
    </div>
  </section>
</template>

<script lang="ts">


import { Vue } from "vue-class-component";

export default class NavBar extends Vue {
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
.NavBar__Header {
  display: flex;
  justify-content: space-between;
}
.NavBar__Header__AuthButtons {
  display: flex;
}
.NavBar__Header__Item {
  padding-right: .5rem;
  padding-left: .5rem;
}
//.NavBar__Header__Item:last-of-type {
//  color: red;
//}
</style>
