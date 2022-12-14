<template>
  <div class="sidebar-wrapper pa-5">
    <p class="heading mb-5"><span>4XCh</span>anger</p>

    <div class="nav-links" v-for="link in links" :key="link.path">
      <router-link class="nav-links__link" :to="link.path">{{
        link.title
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          path: '/dashboard',
        },
        {
          title: 'About',
          path: '/about',
        },
        {
          title: 'Trade',
          path: '/trade',
        },
        {
          title: 'Logout',
          path: '',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  // background: purple;
  height: 23rem;
  position: relative;
}

.heading {
  font-weight: 600;
  font-size: 1.3rem;
}

.heading span {
  color: var(--color-primary);
}

.nav-links {
  &:last-of-type {
    position: absolute;
    bottom: 0;
  }
  &__link {
    text-decoration: none;
    font-size: 1rem;
    color: var(--color-grey);
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--color-primary);
    }
  }
}
</style>
