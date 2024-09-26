<template>
      <header class="main-header">
    <h1 class="restaurant-name">Resto Delight</h1>
    <nav class="nav-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutUs">About</router-link></li>
        <li><router-link to="/contactUs">Contact Us</router-link></li>
        <button style="background-color: cornsilk; font-size: 15px; padding-top: -70px; border-radius: 8px" @click="login">Login</button><br />
        <a style="color: white; padding-right:5px;" href="#" @click="logout">Logout</a>
      </ul>
    </nav>
  </header>
    <div class="header">
        <div class="logo">
            <!-- <h1 class="restaurant-name">Resto Delight</h1> -->
           
        </div>

        <!-- <div class="nav">
            <div class="nav-items">
                <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutUs">About</router-link></li>
        <li><router-link to="/contactUs">Contact Us</router-link></li>
        <button style="background-color: cornsilk; font-size: 15px; padding-top: -70px; border-radius: 8px" @click="login">Login</button><br />
        <a style="color: white; padding-right:5px;" href="#" @click="logout">Logout</a>
            </div>
        </div> -->
    </div>
</template>

<script>
 import axios from 'axios';
export default {
    name: 'headerNav',
    methods: {
        async logout(event) {
            event.preventDefault();
            
            try {
                await axios.post('http://127.0.0.1:8000/api/logout');
                this.$router.push({ name: 'loginUser' })
            } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                console.error('Server responded with status:', error.response.status);
                console.error('Response data:', error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error:', error.message);
            }
        }
        }
    }
}
</script>

<style>
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 5px;
}

.restaurant-name {
  font-size: 10px;
  font-weight: bold;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 10px;
}

.nav-menu ul li {
  display: inline;
}

.nav-menu ul li a {
  color: white;
  text-decoration: none;
}

.nav-menu ul li a:hover {
  text-decoration: underline;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  background: url('../assets/restaurant-bg.jpg') center/cover no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: #fff;
}

.cta-button {
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  cursor: pointer;
}

/* Modal Styles */
.modal {
  display: flex;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: left;
}

.close-button {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close-button:hover,
.close-button:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  padding: 10px;
  background-color: #ff6347;
  color: white;
  border: none;
  cursor: pointer;
}

.restaurant-name {
  font-size: 48px;
  font-weight: bold;
}

.restaurant-tagline {
  font-size: 24px;
  margin-top: 10px;
}

.cta-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.cta-button:hover {
  background-color: #ff6347;
}

/* Menu Section */
.menu-section {
  padding: 40px;
  text-align: center;
  background-color: #f4f4f4;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.menu-item {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  width: 250px;
}

.menu-item h3 {
  font-size: 20px;
  color: #333;
}

.menu-item p {
  font-size: 16px;
  color: #666;
}

.price {
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ff7f50;
}


.logo img {
    height: 40px; /* Adjust the height of the logo as needed */
}

.nav {
    background-color: #333;
    overflow: hidden;
}

.nav-items {
    display: flex;
    justify-content: flex-end;
    /* Align items to the right */
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-left: 10px;
}
.nav a:hover{
    background-color: #ddd;
    color: #222;
}

</style>