<template>
  <div class="home">
    Hello, World!
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
    }
  }
};
</script>