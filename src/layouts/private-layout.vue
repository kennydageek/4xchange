<template>
  <v-row class="private-layout">
    <v-col cols="3" class="py-10 px-5 sidebar-col">
      <div class="sidebar-nav">
        <x-base-sidebar />
      </div>
    </v-col>
    <v-col cols="6" class="py-10 px-5 slot-col red">
      <slot />
    </v-col>
    <v-col cols="3" class="orange">traddeer</v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.private-layout {
  justify-content: space-between;
}

.sidebar-col {
  height: 100vh;
  background-color: rgba(97, 100, 102, 0.4);
}

.slot-col {
  background-color: rgba(97, 100, 102, 0.4);
}
</style>
