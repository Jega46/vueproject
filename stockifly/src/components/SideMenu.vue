<template>
    <div class="side-menu">
      <ul>
        <li v-for="item in menuItems" :key="item.id" @click="selectMenuItem(item)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuItems: [
          { id: 1, name: 'StockTransfer', route: '/' },
          { id: 2, name: 'StockAdjustment', route: '/StockAdjustment' }
        ],
        selectedMenuItem: null
      };
    },
    methods: {
      selectMenuItem(item) {
        this.selectedMenuItem = item;
        this.$router.push(item.route);
      }
    }
  };
  </script>
  
  <style>
  .side-menu {
    position: fixed;
    width: 250px;
    height: 630px;
    background-color: #fa3a3ac4;
    color: rgb(255, 255, 255);
    font-weight: 400;
    border-radius: 5px;
    border: 1px solid rgb(58, 57, 57);
    
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    padding: 10px;
    cursor: pointer;
    text-align: left;
    margin-right: 10px;
    margin-left: 10px;
  }
  li:hover {
    background-color: #f0a4a4;
    border-radius: 5px;
  }
  
  </style>
  