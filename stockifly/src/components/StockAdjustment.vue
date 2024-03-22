<template>
    <div class="adjustment-maincontent">
        <section class="sec1">
        <header >
        <span class="span1">
          <div class="clock"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
             <circle cx="12" cy="12" r="10" fill="none" stroke="blue" stroke-width="2" />
             <line x1="12" y1="12" x2="15" y2="12" stroke="blue" stroke-width="2" />
             <line x1="12" y1="12" x2="12" y2="9" stroke="blue" stroke-width="2" />
          </svg>  Clock In</div>
        </span>
        <span class="span1">POS</span>
        <span class="span1">Electronifly</span>
        <span class="span1"><select class="language"><option value="en">En</option></select></span>
        <span class="span1"><i class="fa fa-user"></i></span>
     </header>  
     <hr>
    <p class="stock">Stock Adjustment</p>
    <div class="stock2"><p>Dashboard - <span>Stock Adjustment</span></p></div>
    <hr>
    <div >
        <router-link to="/AddNewAdjustment"><button  @click="openModal" class="addbtn"><span class="plus">+</span> Add New Adjustment</button></router-link>
        <PopupPage ref="popupPage" />
    </div>
    <span class="searchbtn">
        <input class="searchbtn-input" type="search" placeholder="Search Product"> 
    </span>
</Section>
    <Section>
    <table>
        <thead>
          <tr>
          
            <th><input type="checkbox"></th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Action</th>

          </tr>
        </thead>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
       
      </table>
</section>

    </div>
</template>

<style scoped>
div.adjustment-maincontent{
  flex: 1;
  padding-left: 260px;
}
header{
  display: flex;
    align-items: center;
    justify-content: flex-end;
}
hr{
    border: 1px solid rgb(236, 230, 230);
    clear:both
}
.span1{
    margin: 10px;
    margin-left: 20px;
    border-right: 1px inset rgb(48, 48, 49);
    color: rgb(115, 115, 248);
   padding-right:30px
}
button.addbtn{
    margin:10px;
    padding: 5px;
    background-color: rgb(10, 172, 247);
    color:white;
    border: unset;
    height: 30px;
    font-size: medium;
    float: left;
    margin-right: 650px;
    
}
section.sec1{
    background-color: white;
    padding:20px;
    border-radius: 5px;
}
.searchbtn{
    box-sizing: border-box;
    clear: right;  
}
.searchbtn-input{
    width: 200px;
    height: 30px;
    margin-top: 10px
}
table{
    margin: 10px;
    width: 95%;
    border-radius: 5px;
}
th{
    padding: 10px;
    background-color: rgb(224, 223, 223);
    color: rgb(37, 37, 37);
    font-weight: 200;
}
td{
    background-color: white;
    padding: 10px;
  
}
</style>
<script>
import PopupPage from './AddNewAdjustment.vue';

export default {
  components: {
    PopupPage
  },
  methods: {
    openModal() {
      this.$refs.popupPage.openModal();
    }
  }
};
</script>