<template>
    <navbar/>
    <Footer/>
<form class="searchbar">
  <div class="searchbar-input">
    <!-- Input -->
    <input type="search" placeholder="Rechercher">
    <!-- Clear button -->
    <a href="#" class="searchbar-clear"></a>
  </div>
</form>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'videos',
  components: {
    Navbar, Footer
  }
}
</script>

<style scoped>
.searchbar {
  text-align: center;
}
</style>