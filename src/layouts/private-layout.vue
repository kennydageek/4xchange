<template>
  <v-row class="private-layout">
    <v-col cols="12" sm="3" class="py-10 px-5 sidebar-col">
      <div class="sidebar-nav">
        <x-base-sidebar />
      </div>
    </v-col>
    <v-col cols="12" sm="6" class="py-10 px-5 slot-col">
      <slot />
    </v-col>
    <v-col cols="12" sm="3" class="py-10 px-5 profit-col">
      <p class="mt-5">Profit</p>
      <p>you made {{ $store.state.currency.exchangeRate * 100 }}</p></v-col
    >
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
  // height: 100vh;
  background-color: rgba(97, 100, 102, 0.4);
}

.slot-col {
  background-color: rgba(97, 100, 102, 0.4);
}

.profit-col {
  background-color: rgba(97, 100, 102, 0.4);
}
</style>
