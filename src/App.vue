<template>
  <v-app>
    <span class="skewed"></span>
    <HelloWorld class="z-index" />
    <mainPage class="z-index" />
    <footerMain />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import mainPage from "./components/mainPage";
import footerMain from "./components/footerMain";

export default {
  name: "App",

  components: {
    HelloWorld,
    mainPage,
    footerMain,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow-x: hidden!important;;
}
</style>