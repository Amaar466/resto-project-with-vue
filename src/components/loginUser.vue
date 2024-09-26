<template>
    <div class="login-page" :style="{ backgroundImage: `url(${require('../assets/login.jpg')})`, 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        height: '100vh',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
      }">
        <div class="login-box">
            <h1 class="restaurant-name">Resto Delight</h1>
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
                this.errorMessage = 'Please enter correct details.';
            }
        }
    }
  };
  </script>
  
  <style>
  .logo {
    width: 150px;
    margin-bottom: 20px;
  }
  
  .login-page {
    position: relative;
    background-color: rgba(0, 0, 0, 0.5); /* Optional to add a slight dark overlay on background */
  }
  
  .login-box {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .login input {
    width: 300px;
    height: 40px;
    padding-left: 40px;
    display: block;
    margin-bottom: 20px;
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
  