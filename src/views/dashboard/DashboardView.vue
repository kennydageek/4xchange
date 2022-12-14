<template>
  <div class="dashboard-wrapper pa-5">
    <p class="welcome">Welcome, Kehinde</p>
    <p class="incoming-currency mb-0">1 united state Dollar equals</p>
    <p class="outgoing-currency">0.8932 Euro</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dashboard-wrapper {
  color: var(--color-grey);
}
.welcome {
  font-size: 1.4rem;
  // margin-bottom: 0;
}

.incoming-currency {
  font-size: 0.8rem;
}
.outgoing-currency {
  font-size: 1.6rem;
  color: #fff;
}
</style>
