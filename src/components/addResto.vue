<template>
    <div class="restaurant">
        <headerNav />
        <h1>Hello User , Welcome on Add Restaurant Page..</h1>
        <input type="text" v-model="name" name="name" placeholder="Enter Your Name">
        <input type="text" v-model="address" name="address" placeholder="Enter Your Address">
        <input type="text" v-model="contact" name="contact" placeholder="Enter Your contact">
        <button @click="addRestaurant">Add Restaurant</button>
    </div>
</template>

<script>
import headerNav from './headerNav.vue'
export default {
    name: 'addResto',
    components: {
        headerNav
    },
    data(){
        return {
                name:'',
                address:'',
                contact:''
            }
    },
    methods: {
        async addRestaurant() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/add-restaurant', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: this.name,
                        address: this.address,
                        contact: this.contact
                    })
                });
                const responseData = await response.json();
                localStorage.setItem('userData', JSON.stringify(responseData));
                this.$router.push({ name: 'homeWord' })
                console.log(responseData); 
            } catch (error) {
                console.error('Error:', error);
            }
        
        }
    },
}
</script>
<style>
.restaurant input{
    width: 300px;
    height: 30px;
    padding-left: 40px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.restaurant button{
    width: 320px;
    height: 30px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
</style>