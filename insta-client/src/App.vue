<template>
  <div id="app">
    <Header v-if="isAuthenticated" />
    <router-view />
    <Footer v-if="isAuthenticated" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    Header,
    Footer
  },

  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    }
  }
};
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #f7f7f7;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
}

#app {
  width: 100vw;
  height: 100vh;
}

.form-group {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  padding: 25px;

  input {
    width: 100%;
    height: 30px;
    border: 1px solid #ddd;
    margin-bottom: 15px;
    text-indent: 5px;
    background: #eee;
    outline: none;

    &.err {
      background: rgba(255, 0, 0, 0.2);
      border: 1px solid #af1e2d;
    }

    &:focus {
      border: 1px solid #ccc;
    }
  }
  button {
    width: 100%;
    height: 30px;
    background: #ffce00;
    appearance: none;
    border: none;
    outline: none;
    border-radius: 8px;

    color: #171717;
    font-size: 18px;
    font-weight: 700;
  }
  .error_msg {
    margin: 15px 0px;
    padding: 10px;
    background-color: rgba(200, 0, 0, 0.2);
    color: #171717;
    font-weight: 700;
    border-radius: 8px;
  }
}
</style>