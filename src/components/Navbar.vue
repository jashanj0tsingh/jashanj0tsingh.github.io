<template>
  <div>
    <b-navbar :fixed-top="true"  :transparent="true">
<!--    <b-navbar style="background-color: greenyellow">-->
      <template #brand>
        <b-navbar-item>
          <Terminal/>
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item href="#">
          /about
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import Terminal from "@/components/Terminal";
export default {
  name: "Navbar",
  components: {Terminal}
}
</script>

<style scoped>

</style>