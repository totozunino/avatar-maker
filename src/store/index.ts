import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    avatar: {
      topType: "Blank",
      accessoriesType: "Blank",
      facialHairType: "Blank",
      clotheType: "Hoodie",
      clotheColor: "",
      eyebrowType: "Default",
      eyeType: "Default",
      mouthType: "Default",
      skinColor: "Pale",
      hairColor: "",
      facialHairColor: "",
      topColor: "",
      graphicType: "Hola"
    }
  },
  mutations: {
    SET_AVATAR(state, value) {
      state.avatar = value;
    }
  },
  actions: {},
  modules: {},
  plugins: [new VuexPersist().plugin]
});
