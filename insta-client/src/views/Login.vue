
<template>
  <div class="login-page">
    <header>
      <h3>
        INSTA
        <span>CLONE</span>
      </h3>
      <h4>Login</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="email" placeholder="Email" :class="(emailError) ? 'err' : ''" />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        :class="(passError) ? 'err' : ''"
      />
      <button class="login-btn" @click="login">Log in</button>
      <div class="error_msg" v-if="hasErrors">{{ error }}</div>
    </main>
    <footer>
      <p>
        Don't have an account?
        <router-link class="link" to="/register">Sign up</router-link>.
      </p>
    </footer>
  </div>
</template> 

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      hasErrors: false,
      emailError: false,
      passError: false,
      error: ""
    };
  },
  methods: {
    login() {
      let api_url = this.$store.state.api_url;
      if (this.email == "" || this.password == "")
        return alert("Please fill in all fields!");

      this.$http
        .post(api_url + "user/login", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          if (response.data.auth) {
            localStorage.setItem("jwt", response.data.token);
            this.$router.push("/");
          } else {
            console.log(response);
            if (response.data.mailError) {
              this.emailError = true;
            } else {
              this.emailError = false;
            }
            if (response.data.passError) {
              this.passError = true;
            } else {
              this.passError = false;
            }
            this.error = response.data.msg;
            this.hasErrors = true;
          }
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    }
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
    h4 {
      color: #888;
      font-size: 24px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      padding: 0;
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
    width: calc(100% - 50px);
    height: 20px;
    background-color: #eee;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
    padding: 15px 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #888;
      font-size: 16px;
      line-height: 40px;
      margin: 0px;
      padding: 0px;
      text-align: center;
    }

    .link {
      color: #e35205;
      text-decoration: none;
      font-weight: 700;
    }
  }
}
</style>