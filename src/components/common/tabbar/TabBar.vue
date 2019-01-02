<template>
  <div id="tab-bar">
    <slot>默认</slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    background-color: #e6e6e6;
    height: 49px;
    box-shadow: 0 -1px 1px #eee;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
  }
</style>
