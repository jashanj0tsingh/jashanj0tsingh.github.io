<template>
  <div class="container">
    <Navbar />
    <Body />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Body from "@/components/Body";

export default {
  name: "LandingPage",
  components: {Navbar, Body},
  props: {
    message: String
  }
}
</script>

<style scoped>
/*.foobar {*/
/*  position: fixed;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform: translate(-50%, -50%);*/
/*  -webkit-transform: translate(-50%, -50%);*/
/*  -moz-transform: translate(-50%, -50%);*/
/*  -o-transform: translate(-50%, -50%);*/
/*  -ms-transform: translate(-50%, -50%);*/
/*  height: 75vh;*/
/*  width: 75vw;*/

/*  font-size: 20px;*/
/*  background-color: whitesmoke;*/
/*  border: transparent 5px solid;*/
/*  border-radius: 5px;*/
/*  padding: 5px;*/
/*  z-index: 100;*/
/*}*/
</style>