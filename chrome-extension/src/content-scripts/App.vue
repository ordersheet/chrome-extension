<template>
  <div class="example">
    hello, this is chrome extension vue. URL: {{ url }}
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>
<style scoped>
.example {
  align-items: center;
  display: flex;
  position: relative;
  margin: 0 16px;
  font-size: 24px;
  font-weight: 700;
}
</style>