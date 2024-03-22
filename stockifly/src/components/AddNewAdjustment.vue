<template>
    <div class="modal" v-if="isOpen">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h3>AddNewAdjustment</h3>
        <hr>
        <div>
            <label class="addtype-content-label" required><span>*</span> Product</label>
       <div>
        <input class="search-product" type="search" placeholder="Search Product Name"><button class="input-cont"><i class="fa fa-plus"></i></button>
       </div>
       <div class="addtype">
       <div class="addtype-content"><label class="addtype-content-label">Currentt Stock</label>
       <div class="currentstock-content">-</div></div>
       <div class="addtype-content"><label class="addtype-content-label" required><span>*</span> Quantity</label>
       <div>
        <input class="addtype-content-input" type="number">
       </div></div>
       <div class="addtype-content"><label class="addtype-content-label">Adjustment Type</label>
       <div>
        <select class="addtype-content-input" name="adjustment-type" id="type">
            <option value="Add">Add</option>
            <option value="Subtract">Subtract</option>
        </select>
       </div></div>
       </div>
    <div>
        <label class="addtype-content-label">Notes</label>
        <div><textarea class="addtype-content-input" cols="70" rows="4"></textarea></div>
    </div>
    </div>
    <div>
        <button class="createbtn">Create</button>
      </div>
      </div>
    
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      openModal() {
        this.isOpen = true;
      },
      closeModal() {
        this.isOpen = false;
      }
    }
  };
  </script>
  
  <style>
  h3{
    font-weight: 300;
  }
  .modal {

    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 40%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .search-product{
    width:90%;
    height: 35px;
    margin-top: 5px;
    border-color: lightgray;
    border-style: solid;
  }
  .addtype{
   display: flex;
   justify-content: space-between;
   margin: 10px;
  }
  .addtype-content-input{
    margin-top: 5px;
    border-color: lightgray;
    border-style: solid;
    border-width: 1px;
  }
  select.addtype-content-input{
    width: 150px;
    height: 25px;
    border-color: lightgray;
  }
  input.addtype-content-input{
    width:80px;
    height: 25px;
  }
  .addtype-content-label{
    color: #2a2929a3;
  }
  .createbtn{
    background-color: rgb(4, 108, 143);
    color: white;
    padding: 10px;
    margin:10px 230px
  }
  </style>
  