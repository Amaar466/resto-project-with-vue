<template>
    <div>
      <!-- Navigation Header -->
      <headerNav />
      
      <!-- About Us Page -->
      <div class="about-page" :style="{ 
        backgroundImage: `url(${require('../assets/restaurant-about-bg.jpg')})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        height: '600px'
      }">
        <!-- Hero Section for About Us -->
        <header class="hero-section">
          <div class="hero-overlay">
            <div class="hero-content">
              <h1>About Us</h1>
              <p class="tagline">Discover the story behind Resto Delight</p>
            </div>
          </div>
        </header>
  
        <!-- Content Section -->
        <section class="about-content">
          <h2>Our Story</h2>
          <p>
            Resto Delight started as a small family-owned restaurant in the heart of the city. Our founders, with a passion for food and hospitality, decided to create a place where guests could feel at home while enjoying gourmet meals.
          </p>
          
          <h2>Our Mission</h2>
          <p>
            At Resto Delight, our mission is simple: to serve exceptional food using the freshest ingredients, while delivering excellent service. We believe in creating memorable experiences for our guests, whether they are here for a quick lunch or a special celebration.
          </p>
          
          <h2>Meet the Team</h2>
          <div class="team-members">
    <div v-for="member in team" :key="member.id" class="team-member">
      <!-- Use a default placeholder image if no image is available -->
      <img 
        :src="member.image ? member.image : '/default-image.jpg'" 
        :alt="`Photo of ${member.name}`" 
        class="team-photo" 
      />
      <h3>{{ member.name }}</h3>
      <p class="position">{{ member.position }}</p>
      <p class="bio">{{ member.bio }}</p>
    </div>
  </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
import axios from "axios";

export default {
  name: 'aboutUs',
  data() {
    return {
      team: [], // Empty team array to be populated by API response
    };
  },
  created() {
    // Manually define the base URL as localhost:8080
    const baseUrl = "http://localhost:8000";

    // Fetch team members from the API when the component is created
    axios.get("http://localhost:8000/api/fetch_team")
      .then(response => {
        this.team = response.data.map(member => {
          return {
            ...member,
            image: `${baseUrl}/storage/${member.image}` // Use manually defined base URL
          };
        });
      })
      .catch(error => {
        console.error("There was an error fetching the team data:", error);
      });
  },
};
</script>
  
  <style scoped>
  /* Hero Section */
  .hero-section {
    height: 60vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .hero-content {
    color: white;
    text-align: center;
    z-index: 1;
  }
  
  .hero-content h1 {
    font-size: 48px;
    font-weight: bold;
  }
  
  .tagline {
    font-size: 20px;
    margin-top: 10px;
  }
  
  /* About Us Content */
  .about-content {
    padding: 40px;
    text-align: center;
    background-color: #fff;
  }
  
  .about-content h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .about-content p {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
    margin-bottom: 40px;
  }
  
  /* Team Section */
  .team-members {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .team-member {
    width: 250px;
    text-align: center;
  }
  
  .team-photo {
    width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  .team-member h3 {
    font-size: 22px;
    margin-bottom: 5px;
    color: #333;
  }
  
  .team-member p {
    font-size: 16px;
    color: #777;
  }
  </style>
  