<template>
  <div class="input-wrapper">
    <input :placeholder="placeholder" :type="type" />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
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
