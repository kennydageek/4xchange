<template>
  <v-app id="app">
    <v-main>
      <component :is="layout">
        <router-view />
      </component>
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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');

:root {
  --bg-color: #030304;
  --color-primary: #3fb967;
  --color-primary-variant: #195233;
  --color-grey: #616466;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
}

#app {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg-color);
  color: #fff;
}

.error-class {
  color: red;
  font-size: 0.8rem;
  background: transparent !important;
}
</style>
