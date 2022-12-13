<template>
  <div class="register-wrapper mt-15">
    <h1 class="register-wrapper__heading mb-10">Sign up</h1>

    <form>
      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Username"
      />

      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Email address"
      />
      <x-base-input
        class="base-input mb-5"
        type="password"
        placeholder="Password"
      />

      <p class="currency-heading mb-2 mt-5">Preferred Incoming currency</p>

      <div class="currency-wrapper">
        <x-base-select name="currencies" :options="currency" />
      </div>

      <p class="currency-heading mb-2 mt-5">Preferred Outgoing currency</p>

      <div class="currency-wrapper mb-10">
        <x-base-select name="currencies" :options="currency" />
      </div>

      <x-base-button
        class="btn-cta mb-5"
        @click="$router.push({ name: 'Dashboard' })"
      >
        Sign up
      </x-base-button>
    </form>

    <p class="register">
      Already a member? <router-link :to="{ name: 'login' }">Login</router-link>
    </p>
  </div>
</template>

<script>
import currencyList from '@/utils/currencyList.json';
export default {
  data() {
    return {
      currency: currencyList,
    };
  },
};
</script>

<style lang="scss" scoped>
.register-wrapper {
  margin: 0 auto;
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

.currency-heading {
  font-size: 1rem;
  color: var(--color-primary);
}

// .currency-wrapper {
//   height: 10rem;
//   overflow-y: scroll;
// }
</style>
