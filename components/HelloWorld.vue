<template>
  <view>
    Hello, World {{ name }}!
  </view>
</template>

<script setup lang="ts">
  let name : string = 'John'
</script>

<style lang="scss" scoped>
  view {
    color: green;
  }
</style>