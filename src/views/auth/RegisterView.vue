<template>
  <div class="register-wrapper mt-15">
    <h1 class="register-wrapper__heading mb-10">Sign up</h1>

    <form @submit.prevent="registerUser">
      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Username"
        :value="form.name"
        v-model="form.name"
      />

      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Email address"
        :value="form.email"
        v-model="form.email"
      />
      <x-base-input
        class="base-input mb-5"
        type="password"
        placeholder="Password"
        v-model="form.password"
        :value="form.email"
      />

      <p class="currency-heading mb-2 mt-5">Preferred Incoming currency</p>

      <div class="currency-wrapper">
        <x-base-select
          v-model="form.incoming"
          :value="form.incoming"
          name="currencies"
          :options="currency"
        />
      </div>

      <p class="currency-heading mb-2 mt-5">Preferred Outgoing currency</p>

      <div class="currency-wrapper mb-10">
        <x-base-select
          v-model="form.outgoing"
          :value="form.outgoing"
          name="currencies"
          :options="currency"
        />
      </div>

      <x-base-button class="btn-cta mb-5" type="submit">
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
// import AuthService from '@/services/authService.js';
export default {
  data() {
    return {
      currency: currencyList,
      form: {
        name: null,
        password: null,
        email: null,
        incoming: null,
        outgoing: null,
      },
    };
  },

  methods: {
    async registerUser() {
      try {
        const body = {
          name: this.form.name,
          email: 'george.bluth@reqres.in',
          password: this.form.password,
          incomingCurrency: this.form.incoming,
          outgoingCurrency: this.form.outgoing,
        };

        await this.$store.dispatch('auth/registerUser', body);
        await this.$router.push({ name: 'dashboard' });
      } catch (error) {
        console.log(error);
      }
    },
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
