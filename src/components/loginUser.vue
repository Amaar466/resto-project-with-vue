<template>
    <img class="logo" src="../assets/resto.jpg" />
    <h1>Login</h1>
    <div class="login">
        <input type="text"  name="email" placeholder="Enter Your Email">
        <input type="password"  name="password" placeholder="Enter Your Password">
        <button @click="login">Login</button><br />
        <p>
        <router-link to="/sign-up">SignUp</router-link>
        </p>
  </div>
</template>

<script>
export default {
    name:'loginUser',
    data(){
        return {
            email:'',
            password:''
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
        console.log('Login successful!');
        this.$router.push('/');
      } else {
        console.error('Login failed:', response.statusText);
        this.password = '';
        this.errorMessage = 'Invalid email or password';
      }
    } catch (error) {
      console.error('Error:', error);
      this.errorMessage = 'An error occurred while logging in';
    }
    }
  }
};

</script>

<style>
.logo{
    width: 150px;
    /* height: 80px; */
}
.login input{
    width: 300px;
    height: 40px;
    padding-left: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.login button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}


</style>