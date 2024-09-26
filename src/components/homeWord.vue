<template>
  <headerNav />

  <header class="main-header">
    <h1 class="restaurant-name">Resto Delight</h1>
    <nav class="nav-menu">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutUs">About</router-link></li>
        <li><router-link to="/contactUs">Contact Us</router-link></li>
        <button  style="background-color: cornsilk;
   
    font-size: 15px;
    padding-top: -70px; border-radius: 8px" @click="login">Login</button><br />
        <a style="color: white; " href="#" @click="logout">Logout</a>
      </ul>
    </nav>
  </header>

  <div class="home-page" :style="{ 
      backgroundImage: `url(${require('../assets/restaurant-bg.jpg')})`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      height: '600px'
    }">

    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="restaurant-name">Welcome to Resto Delight</h1>
          <p class="restaurant-tagline">Experience the finest cuisine in town</p>
          <button class="cta-button" @click="openModal">Book a Table</button>
        </div>
      </div>
    </header>

    <!-- Modal for booking a table -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <h2>Book a Table</h2>
        <form @submit="handleBookingFormSubmit">
          <label for="name">Full Name:</label>
          <input type="text" id="name" name="name" v-model="formData.name" required />

          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" v-model="formData.phone" required />

          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" v-model="formData.email" required />

          <label for="date">Reservation Date:</label>
          <input type="text" id="date" name="reservation_date" v-model="formData.reservation_date" required />

          <label for="time">Reservation Time:</label>
          <input type="time" id="time" name="reservation_time" v-model="formData.reservation_time" required />

          <label for="people">Number of People:</label>
          <input type="number" id="people" name="people" min="1" v-model="formData.people" required />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>

    <!-- Menu Section -->
    <section class="menu-section">
      <h2>Our Menu</h2>
      <div class="menu-items">
        <div class="menu-item" v-for="item in menu" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p class="price">${{ item.price }}</p>
        </div>
      </div>
    </section>

    <RestaurantFooter />
  </div>
</template>

<script>
import RestaurantFooter from './RestaurantFooter.vue';

export default {
  name: "homeWord",
  components: {
    RestaurantFooter,
  },
  data() {
    return {
      menu: [
        { id: 1, name: "Spaghetti Carbonara", description: "Classic Italian pasta with creamy sauce.", price: 12 },
        { id: 2, name: "Grilled Salmon", description: "Served with vegetables and lemon butter sauce.", price: 20 },
        { id: 3, name: "Margherita Pizza", description: "Wood-fired pizza with fresh mozzarella and basil.", price: 15 },
        { id: 4, name: "Caesar Salad", description: "Crisp lettuce, croutons, and Caesar dressing.", price: 10 },
        { id: 5, name: "Tiramisu", description: "Traditional Italian dessert with coffee and mascarpone.", price: 8 },
      ],
      isModalOpen: false,
      formData: {  // For booking form
        name: '',
        phone: '',
        email: '',
        reservation_date: '',
        reservation_time: '',
        people: ''
      },
      loginFormData: {  // Separate login form data
        email: '',
        password: ''
      },
      message: '',
      errorMessage: ''
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    formatDateToDMY(date) {
      const d = new Date(date);
      let day = ('0' + d.getDate()).slice(-2);
      let month = ('0' + (d.getMonth() + 1)).slice(-2); 
      let year = d.getFullYear();
      return `${day}/${month}/${year}`;
    },
    async handleBookingFormSubmit(event) {
      event.preventDefault();
      this.formData.reservation_date = this.formatDateToDMY(this.formData.reservation_date);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/book-table', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          const result = await response.json();
          this.message = result.message;
          alert('Your table has been booked, confirmation email sent!');
          this.closeModal();
        } else {
          this.message = 'Error sending booking confirmation. Please try again.';
        }
      } catch (error) {
        console.error('Error:', error);
        this.message = 'Error occurred. Please try again later.';
      }
    },
    async login() {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.loginFormData.email,
            password: this.loginFormData.password,
          }),
        });

        if (response.ok) {
          this.$router.push({ name: 'loginUser' });
          console.log('Login successful!');
        } else {
          const errorData = await response.json();
          this.errorMessage = 'Invalid email or password';
          console.error('Login failed:', errorData.message);
        }
      } catch (error) {
        console.error('Error:', error);
        this.errorMessage = 'Please enter correct details';
      }
    },
    logout() {

  this.loginFormData.email = '';
  this.loginFormData.password = '';
  localStorage.removeItem('userData'); 

  alert('You have been logged out');

  this.$router.push({ name: 'loginUser' });
}
  },
};
</script>


<style scoped>
/* Main Header */
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
</style>
