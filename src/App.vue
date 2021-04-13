<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

@Component({
  components: {
    Footer,
    Navbar
  }
})
export default class App extends Vue {}
</script>
