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
        @blur="$v.form.name.$touch()"
      />
      <template v-if="$v.form.name.$error">
        <p v-if="!$v.form.name.required" class="error-class">
          Username is required
        </p>
      </template>

      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Email address"
        :value="form.email"
        v-model="form.email"
      />
      <template v-if="$v.form.email.$error">
        <p v-if="!$v.form.email.required" class="error-class">
          Password is required
        </p>
        <p v-if="!$v.form.email.email" class="error-class">
          Please enter a valid email
        </p>
      </template>

      <x-base-input
        class="base-input mb-5"
        type="password"
        placeholder="Password"
        v-model="form.password"
        :value="form.email"
        @blur="$v.form.email.$touch()"
      />
      <template v-if="$v.form.password.$error">
        <p v-if="!$v.form.password.required" class="error-class">
          Password is required
        </p></template
      >

      <p class="currency-heading mb-2 mt-5">Preferred Incoming currency</p>

      <div class="currency-wrapper">
        <x-base-select
          v-model="form.incoming"
          :value="form.incoming"
          name="currencies"
          :options="currency"
          @blur="$v.form.incoming.$touch()"
        />
      </div>
      <template v-if="$v.form.incoming.$error">
        <p v-if="!$v.form.incoming.required" class="error-class">
          Choose an incoming currency
        </p>
      </template>

      <p class="currency-heading mb-2 mt-5">Preferred Outgoing currency</p>

      <div class="currency-wrapper mb-10">
        <x-base-select
          v-model="form.outgoing"
          :value="form.outgoing"
          name="currencies"
          :options="currency"
          @blur="$v.form.outgoing.$touch()"
        />
      </div>
      <template v-if="$v.form.outgoing.$error">
        <p v-if="!$v.form.outgoingCurrency.required" class="error-class">
          Choose an outgoing currency
        </p>
      </template>

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
import { required, email } from 'vuelidate/lib/validators';

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
  validations: {
    form: {
      name: { required },
      password: { required },
      email: { required, email },
      incoming: { required },
      outgoing: { required },
    },
  },

  methods: {
    async registerUser() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert('Please fill all required fields');
        return;
      }

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
