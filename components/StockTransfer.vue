<template>
<div>
     <header >
        <span class="span1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
             <circle cx="12" cy="12" r="10" fill="none" stroke="black" stroke-width="2" />
             <line x1="12" y1="12" x2="15" y2="12" stroke="black" stroke-width="2" />
             <line x1="12" y1="12" x2="12" y2="9" stroke="black" stroke-width="2" />
          </svg>Clock In
        </span>
        <span class="span1">POS</span>
        <span class="span1">Electronifly</span>
        <span class="span1">en</span>
        <span class="span1"><i class="fa fa-user"></i></span>
     </header>
    <hr>
    <p class="stock">Stock Transfer</p>
    <div class="stock2"><p>Dashboard - <span>Stock Transfer</span></p></div>
    <hr>
    <button >+ Add New Transfer</button>
    
        <span class="span2">
            <div class="aaa">
            <input type="search" placeholder="search by Invoice Nnmber"><i class="fa fa-search"></i></div>
             <div class="aaa"><select  placeholder="Select Warehouse"><option></option></select></div>
             <div class="aaa"><input type="datetime" placeholder="Start D..- End Date"></div>
            
        </span>
    <div>
        <div>Transfer</div>
        <div>Received</div>
    </div>
    <hr>
    <table>
        <tr>
            <td></td>
            <td><input type="checkbox"></td>
            <td>Invoice Number</td>
            <td>Warehouse</td>
            <td>Stock Transfer</td>
            <td>Stock Transfer Status</td>
            <td>Paid Amount</td>
            <td>Total Amount</td>
            <td>Payment Status</td>
            <td>Action</td>

        </tr>
        <tr></tr>
        <tr></tr>
    </table>
    
</div>
<app-create></app-create>
</template>


<script>

</script>

<style scoped>
header{
    display: flex;
    justify-content: right;
}
.span1{
    margin: 10px;
    margin-left: 50px;
}
table{
    width: 100%;
    border: 1px solid rgb(241, 234, 234);
    border-collapse: collapse;
}
td{
    background-color: rgb(243, 239, 239);
    padding: 10px;
    
}
p.stock{
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0%;
}
div .stock2{
    margin-top: 0px;
}
.span2{
    display: flex;
    justify-content: right;
    

}
.aaa{
    padding-left: 50px;
    width: 200px;
    height: 50px;

}
select{
    width:200px;
    height: 20px;
    border-radius: 5px;
}
input{
    border-radius: 5px;
}



</style>

