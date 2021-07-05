<template>
  <span class="brand">
    <i class="bi-chevron-right"/>
      cd
    <i class="bi-file-fill blink"/>
  </span>
</template>

<script>
export default {
  name: "Terminal"
}
</script>

<style scoped>

@keyframes blink {
  50% {
    opacity: 0.0;
  }
}
@-webkit-keyframes blink {
  50% {
    opacity: 0.0;
  }
}

.brand {
  color: #2c3e50;
}
.blink {
  animation: blink 1s step-start 0s infinite;
  -webkit-animation: blink 1s step-start 0s infinite;
}
</style>