<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import StockTransfer from './components/StockTransfer.vue'

export default {
  name: 'App',
};


</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;

  padding: 0px;
  background-color: rgb(243, 240, 240);
}
</style>
