<template>
  <div>
      <img class="logo" src="../assets/resto.jpg" />
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <h1>Login</h1>
      <div class="login">
          <input type="text" v-model="email" name="email" placeholder="Enter Your Email">
          <input type="password" v-model="password" name="password" placeholder="Enter Your Password">
          <button @click="login">Login</button><br />
          <p>
              <router-link to="/sign-up">SignUp</router-link>
          </p>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'loginUser',
  data() {
      return {
          email: '',
          password: '',
          errorMessage: ''
      };
  },
  methods: {
      async login() {
          try {
              const response = await fetch('http://127.0.0.1:8000/api/login', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                      email: this.email,
                      password: this.password
                  })
              }); 

              if (response.ok) {
                  // const responseData = await response.json();
                  // localStorage.setItem('userData', JSON.stringify(responseData));
                   this.$router.push({ name: 'homeWord' });
                  console.log('Login successful!');
              } else {
                  const errorData = await response.json();
                  console.error('Login failed:', errorData.message);
                  this.errorMessage = 'Invalid email or password';
              }
          } catch (error) {
              console.error('Error:', error);
              this.errorMessage = 'Plz Enter Correct Detail';
          }
      }
  }
};
</script>

<style>
.logo {
  width: 150px;
}

.login input {
  width: 300px;
  height: 40px;
  padding-left: 40px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}

.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}

.error-message {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>
