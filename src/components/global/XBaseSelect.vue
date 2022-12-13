<template>
  <select :name="name" id="select">
    <option v-for="(option, i) in options" :key="i" :value="option.code">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#select {
  width: 100%;
  color: var(--color-grey);
  font-size: 1rem;
  cursor: pointer;
  outline: 1px solid var(--color-grey);
  padding: 0.5rem 1.5rem;
  transition: outline 0.5s ease-in-out;
}

#select:focus {
  outline: 1px solid var(--color-primary);
}
</style>
