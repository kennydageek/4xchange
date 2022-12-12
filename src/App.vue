<template>
  <v-app>
    <v-main>
      <!-- <component :is"layout"> -->
      <router-view />
      <!-- </component> -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({}),
  computed: {
    layout() {
      return this.$route.meta.layout || 'public-layout';
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');
html {
  font-size: 62.5%;
}

#app {
  font-family: 'Poppins', sans-serif;
}
</style>
