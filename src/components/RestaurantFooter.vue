<template>
    <!-- Footer Section -->
    <footer class="footer">
      <div class="footer-content">
        <!-- Contact Information -->
        <div class="contact-info">
          <h3>Contact Us</h3>
          <p><strong>Address:</strong> 123 Food Street, Gourmet City, GC 45678</p>
          <p><strong>Phone:</strong> +92 3289136106</p>
          <p><strong>Email:</strong> contact@restodelight.com</p>
        </div>
  
        <!-- Hours of Operation -->
        <div class="hours">
          <h3>Hours of Operation</h3>
          <p><strong>Monday - Friday:</strong> 11:00 AM - 10:00 PM</p>
          <p><strong>Saturday - Sunday:</strong> 12:00 PM - 11:00 PM</p>
        </div>
  
        <!-- Social Media Links -->
        <div class="social-media">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
          <a href="https://www.twitter.com" target="_blank">Twitter</a>
        </div>
      </div>
  
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 Resto Delight. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "RestaurantFooter",
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .contact-info,
  .hours,
  .social-media {
    flex-basis: 30%;
    margin-bottom: 20px;
  }
  
  h3 {
    color: #ff7f50;
    margin-bottom: 10px;
  }
  
  a {
    color: #ff7f50;
    text-decoration: none;
    display: block;
    margin-bottom: 5px;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    border-top: 1px solid #ff7f50;
    padding-top: 10px;
  }
  </style>
  