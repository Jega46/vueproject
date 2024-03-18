<template>
<div>

<app-stock></app-stock>
</div>
</template>

<script>
import StockTransfer from './components/StockTransfer.vue'


export default {
  components: {
    
     'app-stock' : StockTransfer
  },
}; 


</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 13px;
  margin: 15px;
  padding: 0;
}
</style>
