<template>
  <main>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
export default {
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Cabin&display=swap');
  .app-default-font {
    font-family: Cabin, sans-serif;
  }
</style>
