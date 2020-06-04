<template>
  <div id="app">
    <TheNavbar/>
<!--     <img src="./assets/logo.png">-->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  export default {
    components: {
      TheNavbar
    }
  }
</script>

<style>
@import "assets/css/style.css";
</style>
