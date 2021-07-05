<template>
  <div id="app">
    <LandingPage/>
    <Socials />
  </div>
</template>

<script>
import LandingPage from "@/components/LandingPage";
import Socials from "@/components/MySocials";

export default {
  name: 'App',
  components: {
    Socials,
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Menlo, Monospaced, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
