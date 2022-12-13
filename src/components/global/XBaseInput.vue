<template>
  <!-- <div class="input-wrapper"> -->
  <input
    :placeholder="placeholder"
    :type="type"
    v-on="$listeners"
    v-bind="$attrs"
    v-model="formValue"
  />
  <!-- </div> -->
</template>

<script>
export default {
  inheritAttrs: true,
  data() {
    return {
      formValue: this.value,
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
  },

  watch: {
    formValue(v) {
      this.$emit('input', v);
      console.log(v);
      this.formValue = v;
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  outline: 1px solid var(--color-grey);
  width: 100%;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  transition: outline 0.3s ease-in;
}

input:focus {
  outline: 1px solid var(--color-primary);
}

input::placeholder {
  // color: #fff;
}
</style>
