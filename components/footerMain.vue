<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      class="primary lighten-1 white--text text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" :href="icon[1]" target="_blank" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon[0] }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        Copyright &copy; {{ new Date().getFullYear() }}
        <strong>FinPocket</strong>. All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [["mdi-facebook", "https://www.facebook.com/FinPocketPk"], ["mdi-twitter", "https://twitter.com/Finpocketpk"], ["mdi-linkedin", "https://www.linkedin.com/company/finpocketpk/"], ["mdi-instagram", 'https://www.instagram.com/finpocket.pk/?hl=en']],
  }),
};
</script>

<style>
</style>