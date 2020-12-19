<template>
  <div class="error-container">
    <h1>{{ error.statusCode }}</h1>
    <h2>{{ error.message }}</h2>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  head() {
    return {
      title: 'ERROR',
      meta: [
        {
          name: 'description',
          hid: 'description',
          content: `${this.error.message}`,
        },
        {
          name: 'og:description',
          hid: 'og:description',
          content: `${this.error.message}`,
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.error-container {
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  align-items: center;
  pointer-events: none;
}
</style>
