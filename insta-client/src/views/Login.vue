
<template>
  <div class="login-page">
    <header>
      <h3>
        INSTA
        <span>CLONE</span>
      </h3>
    </header>
    <!---screen up top--->
    <main class="form-group">
      <input type="text" v-model="email" placeholder="Email" />
      <!---where to type email--->
      <input type="password" v-model="password" placeholder="Password" />
      <!---box to type password--->
      <button class="login-btn">Log in</button>
    </main>
    <footer>
      <button class="sign-up-btn">Sign up</button>
    </footer>
  </div>
</template> 

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  header {
    h3 {
      color: #171717;
      font-size: 28px;
      text-align: center;
      font-weight: 900;
      span {
        font-weight: 300; //makes the word clone lighter.
      }
    }
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
  }

  footer {
    width: 100%;
    height: 40px;
    background-color: #eee;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
    padding: 15px 25px;
    box-sizing: border-box;

    .sign-up-btn {
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
  }
}
</style>