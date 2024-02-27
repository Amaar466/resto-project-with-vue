<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.jpg" alt="Logo">
        </div>

        <div class="nav">
            <div class="nav-items">
                <router-link to="/">Home</router-link>
                <router-link to="/add">Add Restaurant</router-link>
                <router-link to="/all-list">All Restaurant</router-link>
                <a href="#" @click="logout">Logout</a>
            </div>
        </div>
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
.header {
    display: flex;
    align-items: center;
    justify-content: space-between; /* Align logo to the left and menu to the right */
    background-color: #333;
    padding: 10px 20px; /* Adjust padding as needed */
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