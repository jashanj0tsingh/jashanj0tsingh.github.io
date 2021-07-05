<template>
  <footer class="footer" style="background: transparent">
    <div class="content" style="align-items: center">
      <ul id="mySocials">
        <li><i class="bi-mailbox"/></li>
        <li><i class="bi-linkedin"/></li>
        <li><i class="bi-github"/></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Socials"
}
</script>

<style scoped>

ul#mySocials li {
  display:inline;
  padding: 5px;
  font-size: xx-large;
}

footer {
  color: #2c3e50;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}

</style>