<template>
  <section class="NavBar__Header">
    <h3>On-Track</h3>
<!--    TODO make this stick in the middle and stop moving-->
    <h3 class="NavBar__Header__Title">Welcome To Church</h3>
  <Authenticate />
  </section>
</template>

<script lang="ts">


import { Options, Vue } from "vue-class-component";
import Authenticate from './Authenticate.vue';
import { mapState } from "vuex";

@Options({
  components: { Authenticate } })
export default class NavBar extends Vue {

}
</script>

<style scoped lang="scss">
.NavBar__Header {
  display: flex;
  justify-content: space-between;
}
</style>
