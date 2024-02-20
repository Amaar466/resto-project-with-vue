<template>
    <img class="logo" src="../assets/resto.jpg" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" name="name" placeholder="Enter Your Name">
        <input type="text" v-model="email" name="email" placeholder="Enter Your Email">
        <input type="password" v-model="password" name="password" placeholder="Enter Your Password">
        <button @click="registerUser">Sign Up</button>
        <p>
        <router-link to="/login">Login</router-link>
        </p>
    </div>
</template>

<script>

export default {
    name: 'signUp',
    data(){
        return {
                name:'',
                email:'',
                password:''
            }
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
                const responseData = await response.json();
                localStorage.setItem('userData', JSON.stringify(responseData));
                this.$router.push({ name: 'homeWord' })
                console.log(responseData); 
            } catch (error) {
                console.error('Error:', error);
            }
        },
        mounted() {
            const user = localStorage.getItem('userData'); 
            console.log(user);
            if (!user) {
                this.$router.push({ name: 'homeWord' });  
            }
            
        },
    }
}
</script>

<style>
.logo{
    width: 150px;
    /* height: 80px; */
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>