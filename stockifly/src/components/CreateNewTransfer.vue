<template>
<div>
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
    <div>
    <div class="stock2">
    <p class="stock"> <router-link to="/"> <i class="fas fa-arrow-left"></i></router-link>Stock Transfer</p>
    <span>Dashboard</span> - <span>Purchases</span> - <span>Stock Transfer</span> - <span>Create</span></div>
   <button class="savebtn" type="sumbit"> <i class="fas fa-save"></i> Save</button>
</div>
</section>

<section class="sec2">
    <div class="container">
    <div class="con1">
        <label for="a1">Invoice Number</label><div class="con-input"><input id="a1" type="number" placeholder="Place Enter Voice Number"></div>
    </div>
    </div>
    <div class="container">

    <div class="con2">
        <label for="a2"><span>*</span> Warehouse</label><div class="con-input"> <select><option id="a2" value="Select WareHouse" required></option></select></div>
    </div>
    </div>
    <div class="container">

    <div class="con3">
        <label for="a3"><span>*</span> Stock Transfer Date</label><div class="con-input"> <input id="a3" type="datetime" placeholder="Date Time" required></div>
    </div>
    <div class="product"><label>Product</label><div><input type="search" placeholder="Search product Name/Item name/Scan Bar code"></div></div>
</div>
</section>
</div>

</template>

<script>

export default {
  name: 'StockTransfer',
};
</script>

<style>
.span1{
    margin: 10px;
    margin-left: 20px;
    border-right: 1px inset rgb(48, 48, 49);
    color: rgb(115, 115, 248);
   padding-right:30px
}
header{
    display: flex;
    justify-content: right;
}
hr{
    border: 1px solid rgb(236, 230, 230);
}
section.sec1{
    background-color: white;
    padding:20px;
    border-radius: 5px;
}
p.stock{
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0%;
}
.stock2{
    float:left;
}
.savebtn{
    clear:left;
    background-color: rgb(9, 9, 250);
    color: white;
    border: unset;
    margin-left: 70%;
    margin-top: 25px;
    padding: 10px;
    border-radius: 5px;
    
}

.fas.fas.fa-arrow-left{
    margin-right: 20px;
    margin-bottom: 10px;
}
.con-input{
    margin-top: 25px;
 
}
input{
    height: 30px;
    width: 250px;
}
select{
    height: 35px;
    width: 260px;
}
.con1{
    float: left;
    padding-right: 20px;

}
.con2{
    clear: right;
    float: left;
    padding-right: 20px;

}
.con3{
    clear:right;
    padding-right: 20px;

}
.container{
    margin: 20px;
}
.product{
    margin-top: 20px;
}


</style>
