<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="indigo darken-3 text-center">
      <v-card-text>
        <p class="text-h5 mb-0 mt-4 text-center white--text">Social</p>
        <v-btn v-for="item in socialLinks" :key="item.link" class="mx-4" icon dark large @click="newTab(item.link)">
          <v-icon size="32">
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <p class="pt-4 mb-1">Designed by @totoz - {{ new Date().getFullYear() }}</p>
        <p style="opacity: 0.6" class="mb-1">Made with</p>
        <v-avatar size="40" tile class="pt-0">
          <v-img src="@/assets//logo.png" alt="Vue Logo"></v-img>
        </v-avatar>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {
  private socialLinks = [
    { icon: "mdi-github", link: "https://github.com/totozunino" },
    { icon: "mdi-gitlab", link: "https://gitlab.com/totoz" },
    { icon: "mdi-linkedin", link: "https://www.linkedin.com/in/mathias-zunino-5531021a3/" }
  ];

  private newTab(link: string) {
    window.open(link, "_blank");
  }
}
</script>
