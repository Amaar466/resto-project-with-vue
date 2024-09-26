<template>
    <headerNav />
    <div class="relative w-full h-screen bg-cover bg-center" :style="{ backgroundImage: `url(${backgroundImage})`, height: '600px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
      <div class="absolute inset-0 bg-black opacity-50"></div> <!-- Overlay -->
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="bg-white p-10 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
          <h2 class="text-3xl font-bold text-center text-white-800 mb-6" style="color: white; padding-top: 80px;">Contact Us</h2>
  
          <!-- Static Contact Info -->
          <div class="mb-6 text-center text-white">
            <div class="mb-4">
              <h3 class="font-semibold text-lg">Phone</h3>
              <a href="tel:+1234567890" class="text-indigo-400 hover:text-indigo-600" style="font-size: 20px;">
                +92 3289136106
              </a>
            </div>
            <div class="mb-4">
              <h3 class="font-semibold text-lg">Email</h3>
              <a style=" " href="mailto:info@restaurant.com" class="text-indigo-400 hover:text-indigo-600">
                contact@restodelight.com
              </a>
            </div>
            <div class="mb-4">
              <h3 class="font-semibold text-lg">Address</h3>
              <p style="color: rgb(213, 27, 27);font-size: 20px;">
                Address: 123 Food Street, Gourmet City, GC 45678<br />
              
              </p>
            </div>
          </div>
  
          <!-- Contact Form -->
          <!-- <form @submit.prevent="submitForm">
            <div class="mb-4">
              <label class="block text-white">Name</label>
              <input type="text" v-model="form.name" placeholder="Your Name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div class="mb-4">
              <label class="block text-white">Email</label>
              <input type="email" v-model="form.email" placeholder="Your Email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            </div>
            <div class="mb-4">
              <label class="block text-white">Message</label>
              <textarea v-model="form.message" placeholder="Your Message" rows="4" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
            </div>
            <button type="submit" class="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600">
              Send Message
            </button>
          </form> -->
        </div>
      </div>
    </div>
    <RestaurantFooter />
  </template>
  
  <script>
   import headerNav from  './headerNav.vue';
  import RestaurantFooter from './RestaurantFooter.vue';
  export default {
    components: {
      headerNav,
    RestaurantFooter, 
  },
    data() {
      return {
        backgroundImage: require('@/assets/contactus.jpg'),
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Handle form submission (e.g., send the data to a server)
        alert(`Message from ${this.form.name} has been sent!`);
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  