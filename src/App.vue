<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "app",
  components: {
    Navigation
  }
}
</script>

<style lang="scss">

body{
  margin: 0;
  padding: 0;
}

* {
  position: relative;
}

p {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
