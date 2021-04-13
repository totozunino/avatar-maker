<template>
  <div class="nav">
    <img src="@/assets/images/logo.png" alt="Logo" class="nav__logo" @click="goToWebsite" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Navbar extends Vue {
  private goToWebsite() {
    window.location.href = "https://mzunino.com.uy";
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 1.4rem 0.5rem 0px;
  margin: 0 5% !important;
  display: flex;
  justify-content: space-between;

  &__logo {
    width: 78px;
  }
}
</style>
