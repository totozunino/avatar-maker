<template>
  <div class="home">
    <v-row no-gutters class="pa-0 pa-md-12 pt-0">
      <v-col cols="12" sm="12" md="6" lg="6" class="pa-5" align-self="center">
        <div style="max-width: 500px" class="mx-auto">
          <avatar v-bind="avatar"></avatar>
          <v-btn x-large block color="green darken-1" class="my-4 magic-button" dark @click.prevent="randomAvatar"
            >Do Magic!</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" sm="12" md="6" lg="6" class="pa-5">
        <v-card class="pa-0 pa-md-10" max-width="700">
          <v-card-text>
            <v-tabs v-model="tab" show-arrows color="indigo">
              <v-tabs-slider color="indigo darken-3"></v-tabs-slider>

              <v-tab v-for="t in tabs" :key="t.icon">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon dark v-bind="attrs" v-on="on">
                      {{ t.icon }}
                    </v-icon>
                  </template>
                  <span>{{ t.label }}</span>
                </v-tooltip>
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab" show-arrows-on-hover>
              <v-tab-item v-for="t in tabs" :key="t.name">
                <v-card height="525">
                  <v-row no-gutters class="item-list">
                    <v-col cols="3" v-for="item in t.items" :key="item">
                      <v-card
                        :color="avatar[t.name] == item ? 'indigo lighten-4' : 'deep-purple lighten-5'"
                        class="ma-1"
                        flat
                        @click.stop="changeAvatar(t.name, item)"
                      >
                        <avatar
                          :topType="t.name == 'topType' ? item : avatar.topType"
                          :accessoriesType="t.name == 'accessoriesType' ? item : avatar.accessoriesType"
                          :facialHairType="t.name == 'facialHairType' ? item : avatar.facialHairType"
                          :clotheType="t.name == 'clotheType' ? item : avatar.clotheType"
                          clotheColor=""
                          :eyebrowType="t.name == 'eyebrowType' ? item : avatar.eyebrowType"
                          :eyeType="t.name == 'eyeType' ? item : avatar.eyeType"
                          :mouthType="t.name == 'mouthType' ? item : avatar.mouthType"
                          skinColor="Pale"
                          hairColor=""
                          facialHairColor=""
                          topColor=""
                          graphicType="Hola"
                        >
                        </avatar>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <v-row no-gutters class="pt-5">
              <v-col class="ma-1" cols="1" v-for="color in colors" :key="color">
                <v-card
                  :disabled="tabs[tab].disableColors"
                  :style="tabs[tab].disableColors ? 'opacity: 0.5' : ''"
                  :color="color"
                  width="36"
                  height="36"
                  @click="changeHatColor(color)"
                ></v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Avatar from "vuejs-avataaars/src/Avataaars.vue";

@Component({
  components: {
    Avatar
  }
})
export default class Home extends Vue {
  private tab = 0;
  private tabs = [
    {
      name: "eyeType",
      icon: "mdi-eye",
      label: "Eyes",
      items: [
        "Close",
        "Cry",
        "Default",
        "Dizzy",
        "EyeRoll",
        "Happy",
        "Hearts",
        "Side",
        "Squint",
        "Surprised",
        "Wink",
        "WinkWacky"
      ],
      disableColors: true
    },
    {
      name: "accessoriesType",
      label: "Accessories",
      icon: "mdi-sunglasses",
      items: ["Blank", "Kurt", "Prescription01", "Prescription02", "Round", "Sunglasses", "Wayfarers"],
      disableColors: true
    },
    {
      name: "clotheType",
      icon: "mdi-tshirt-crew",
      label: "Clothes",
      items: [
        "BlazerShirt",
        "BlazerSweater",
        "CollarSweater",
        "GraphicShirt",
        "Hoodie",
        "Overall",
        "ShirtCrewNeck",
        "ShirtScoopNeck",
        "ShirtVNeck"
      ],
      disableColors: false
    },
    {
      name: "topType",
      label: "Head",
      icon: "mdi-redhat",
      items: [
        "NoHair",
        "Eyepatch",
        "Hat",
        "Hijab",
        "Turban",
        "WinterHat1",
        "WinterHat2",
        "WinterHat3",
        "WinterHat4",
        "LongHairBigHair",
        "LongHairBob",
        "LongHairBun",
        "LongHairCurly",
        "LongHairCurvy",
        "LongHairDreads",
        "LongHairFrida",
        "LongHairFro",
        "LongHairFroBand",
        "LongHairNotTooLong",
        "LongHairShavedSides",
        "LongHairMiaWallace",
        "LongHairStraight",
        "LongHairStraight2",
        "LongHairStraightStrand",
        "ShortHairDreads01",
        "ShortHairDreads02",
        "ShortHairFrizzle",
        "ShortHairShaggy",
        "ShortHairShaggyMullet",
        "ShortHairShortCurly",
        "ShortHairShortFlat",
        "ShortHairShortRound",
        "ShortHairShortWaved",
        "ShortHairSides",
        "ShortHairTheCaesar",
        "ShortHairTheCaesarSidePart"
      ],
      disableColors: false
    },
    {
      name: "mouthType",
      label: "Mouth",
      icon: "mdi-emoticon",
      items: [
        "Concerned",
        "Default",
        "Disbelief",
        "Eating",
        "Grimace",
        "Sad",
        "ScreamOpen",
        "Serious",
        "Smile",
        "Tongue",
        "Twinkle",
        "Vomit"
      ],
      disableColors: true
    },
    {
      name: "eyebrowType",
      label: "Eyebrow",
      icon: "mdi-eye-settings",
      items: [
        "Angry",
        "AngryNatural",
        "Default",
        "DefaultNatural",
        "FlatNatural",
        "FrownNatural",
        "RaisedExcited",
        "RaisedExcitedNatural",
        "SadConcerned",
        "SadConcernedNatural",
        "UnibrowNatural",
        "UpDown",
        "UpDownNatural"
      ],
      disableColors: true
    },
    {
      name: "facialHairType",
      label: "Facial hair",
      icon: "mdi-pirate",
      items: ["Blank", "BeardMedium", "BeardLight", "BeardMajestic", "MoustacheFancy", "MoustacheMagnum"],
      disableColors: false
    }
  ];
  private colors = [
    "#F44336",
    "#E91E63",
    "#9C27B0",
    "#673AB7",
    "#3F51B5",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#009688",
    "#4CAF50",
    "#8BC34A",
    "#CDDC39",
    "#FFEB3B",
    "#FFC107",
    "#FF9800",
    "#FF5722",
    "#795548",
    "#607D8B"
  ];

  private get avatar() {
    return this.$store.state.avatar;
  }

  private changeHatColor(color: string) {
    const root = document.documentElement;
    if (this.tabs[this.tab].name == "clotheType") {
      root.style.setProperty("--avataaar-shirt-color", color);
    } else if (this.tabs[this.tab].name == "topType") {
      root.style.setProperty("--avataaar-hat-color", color);
      root.style.setProperty("--avataaar-hair-color", color);
    } else {
      root.style.setProperty("--avataaar-facial-hair-color", color);
    }
  }

  private changeAvatar(name: string, item: string) {
    const avatar = this.avatar;
    avatar[name] = item;
    this.$store.commit("SET_AVATAR", avatar);
  }

  private randomAvatar() {
    this.$store.commit("SET_AVATAR", {
      topType: this.tabs[3].items[Math.floor(Math.random() * this.tabs[3].items.length)],
      accessoriesType: this.tabs[1].items[Math.floor(Math.random() * this.tabs[1].items.length)],
      facialHairType: this.tabs[6].items[Math.floor(Math.random() * this.tabs[6].items.length)],
      clotheType: this.tabs[2].items[Math.floor(Math.random() * this.tabs[2].items.length)],
      clotheColor: "",
      eyebrowType: this.tabs[5].items[Math.floor(Math.random() * this.tabs[5].items.length)],
      eyeType: this.tabs[0].items[Math.floor(Math.random() * this.tabs[0].items.length)],
      mouthType: this.tabs[4].items[Math.floor(Math.random() * this.tabs[4].items.length)],
      skinColor: "Pale",
      hairColor: "",
      facialHairColor: "",
      topColor: "",
      graphicType: "Hola"
    });
  }
}
</script>

<style lang="scss">
.item-list {
  overflow-y: auto;
  max-height: 525px;
}

.magic-button {
  width: 200px;
  background: linear-gradient(90deg, #43a047, #3ba341);
  box-shadow: 0 0 4px 0 #3ba341 !important;
}

:root {
  --avataaar-shirt-color: #009688;
  --avataaar-hair-color: #ffeb3b;
  --avataaar-hat-color: #ffeb3b;
  --avataaar-facial-hair-color: #795548;
}
</style>
