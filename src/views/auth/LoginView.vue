<template>
  <div class="login-wrapper mt-15">
    <h1 class="login-wrapper__heading mb-10">Login</h1>

    <form @submit.prevent="login">
      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Username"
        v-model="form.name"
        :value="form.name"
        @blur="$v.form.name.$touch()"
      />
      <template v-if="$v.form.name.$error">
        <p v-if="!$v.form.name.required" class="error-class">
          Username is required
        </p></template
      >

      <x-base-input
        class="base-input mb-5"
        type="text"
        placeholder="Email address"
        v-model="form.email"
        :value="form.email"
        @blur="$v.form.email.$touch()"
      />
      <template v-if="$v.form.email.$error">
        <p v-if="!$v.form.email.required" class="error-class">
          Email is required
        </p>
        <p v-if="!$v.form.email.email" class="error-class">
          Please enter a valid email
        </p>
      </template>

      <x-base-input
        class="base-input mb-10"
        type="password"
        placeholder="Password"
        v-model="form.password"
        :value="form.password"
        @blur="$v.form.password.$touch()"
      />
      <template v-if="$v.form.password.$error">
        <p v-if="!$v.form.password.required" class="error-class">
          Password is required
        </p></template
      >

      <x-base-button class="btn-cta mb-5" @click="login"> Login </x-base-button>
    </form>

    <p class="register">
      Don't have an account?
      <router-link :to="{ name: 'register' }">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      valid: true,
      form: {
        name: null,
        password: null,
        email: null,
      },
    };
  },

  validations: {
    form: {
      name: { required },
      password: { required },
      email: { required, email },
    },
  },

  methods: {
    async login() {
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
        };

        await this.$store.dispatch('auth/login', body);
        await this.$router.push({ name: 'dashboard' });
      } catch (error) {
        alert(error.response.data.error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-wrapper {
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
</style>
