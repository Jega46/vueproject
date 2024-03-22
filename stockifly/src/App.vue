<template>
  <div id="app">
    <side-menu></side-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import SideMenu from './components/SideMenu.vue';


export default {
  name: 'App',
  components: {
    SideMenu
  }
};


</script>

<style>
body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 15px;

  padding: 0px;
  background-color: rgb(243, 240, 240);

}
#app {
  display: flex;
  width: 100%;
  
 
}


</style>
