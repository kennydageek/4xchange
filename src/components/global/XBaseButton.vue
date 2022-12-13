<template>
  <button class="btn-class"><slot /></button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  padding: 0.5rem 2.5rem;
  background: #3fb967;
  //   width: 100%;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 0.5rem;
}

button:hover {
  background: #fff;
  color: #3fb967;
  transition: all 0.5s ease-in-out;
}
</style>
