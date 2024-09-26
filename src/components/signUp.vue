<template>
    <headerNav />
    <div class="image" :style="{ backgroundImage: `url(${require('../assets/backimge.avif')})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        height: '600px'}">
    <h1 style="color:white  ; padding-top: 120px;" >Sign Up</h1>
    <div class="register" style="margin-top: 70px; ">
        <label style="color: white; display: block;" for="name">Enter Your Name</label>
        <input type="text" v-model="name" name="name" placeholder="Enter Your Name">
        <label style="color: white;" for="email">Enter Your Email</label>
        <input type="text" v-model="email" name="email" placeholder="Enter Your Email" style="display: block; margin-bottom: 10px;">
      
        <label style="color: white;" for="password">Enter Your Password</label>
        <input type="password" v-model="password" name="password" placeholder="Enter Your Password" style="display: block; margin-bottom: 10px;">
        <button @click="registerUser" style="color: black;">Sign Up</button>
        <p>
            <router-link to="/login">Login</router-link>
        </p>
    </div>
</div>
</template>

<script>
// import headerNav from './headerNav.vue'
export default {
    name: 'signUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        };
    },
    methods: {
        async registerUser() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        email: this.email,
                        password: this.password
                    })
                });

                // Check if the response is valid JSON and status is OK (200-299)
                if (!response.ok) {
                    const errorText = await response.text(); // Read as text if not JSON
                    throw new Error(`Server Error: ${errorText}`);
                }

                const responseData = await response.json();
                localStorage.setItem('userData', JSON.stringify(responseData));
                this.$router.push({ name: 'homeWord' });
                console.log(responseData);

            } catch (error) {
                console.error('Error:', error.message);
                alert('Registration failed. Please try again.');
            }
        }
    },
    mounted() {
        const user = localStorage.getItem('userData');
        if (user) {
            this.$router.push({ name: 'homeWord' });  
        }
    }
};
</script>

<style>
.logo {
    width: 150px;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>
