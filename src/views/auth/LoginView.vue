<template>
  <div class="login-wrapper">
    <h1 class="login-wrapper__heading mb-10">Login</h1>

    <form>
      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Email address"
      />
      <x-base-input
        class="base-input mb-10"
        type="password"
        placeholder="Password"
      />
      <x-base-button
        class="btn-cta mb-5"
        @click="$router.push({ name: 'Dashboard' })"
      >
        Login
      </x-base-button>
    </form>

    <p class="register">
      Don't have an account? <router-link to="/register">Sign up</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      username: '',
      password: '',
    };
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(97, 100, 102, 0.4);
  width: 80%;
  max-width: 25rem;
  min-width: 20rem;
  padding: 2rem;

  &__heading {
    // color: #3fb967;
    // text-align: center;
    font-weight: 500;
  }
}

.btn-cta {
  width: 100%;
}

.register {
  font-size: 1rem;
  color: var(--color-grey);
}

.register a {
  text-decoration: none;
  color: var(--color-primary);
  font-weight: 600;
}
</style>
