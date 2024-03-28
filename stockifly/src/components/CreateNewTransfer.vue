<template>
<div class="newtransfer-maincontent">
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
        <label for="a1">Invoice Number</label><div class="con-input"><input  class="input-cont" id="a1" type="number" placeholder="Place Enter Voice Number"></div>
    </div>
    </div>
    <div class="container">

    <div class="con2">
        <label for="a2"><span>*</span> Warehouse</label><div class="con-input"> <select class="input-cont"><option id="a2" value="Select WareHouse" required></option></select><span><button class="input-cont"><i class="fa fa-plus"></i></button></span></div>
    </div>
    </div>
    <div class="container">

    <div class="con3">
        <label for="a3"><span>*</span> Stock Transfer Date</label><div class="con-input"> <input  class="input-cont" id="a3" type="datetime" placeholder="Date Time" required></div>
    </div>
    <div class="product"><label>Product</label><div><input class="product-input" type="search" placeholder="Search product Name/Item name/Scan Bar code"><span><button class="input-cont"><i class="fa fa-plus"></i></button></span></div></div>
</div>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>SubTotal</th>
            <th>Action</th>
 

        </tr>
    </thead>
  
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

        </tr>
        <tr>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>

        </tr>
        <tr>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>
            <td placeholder="No data"></td>

        </tr>
 
    <tfoot>
        <tr>
            <td colspan="5">Subtotal</td>
            <td>0.00</td>
            <td colspan="2">0.00</td>
           
        </tr>
    </tfoot>  
    </table>
    <div>
    <div class="terms-left">
        <div class="terms-container">
            <label>Terms & Conditions</label><div><textarea class="terms-container-text"></textarea></div>
        </div>
        <div class="terms-container">
            <label>Notes</label><div><textarea class="terms-container-text"></textarea></div>
        </div>
    </div>
    <div class="terms-right">
        <div class="terms-right-part1">
            <div class="terms-right-part1-label"><label>Order Status</label></div>
            <div class="terms-right-part1-div">
                <select class="terms-right-part1-select">
                    <option>Ordered</option>
                    <option>confirmed</option>
                    <option>Processing</option>
                    <option>Shipping</option>
                    <option>Delivery</option>
                </select> 
            </div>
            <div class="terms-right-part1-label"><label>Order Tax</label></div>
            <div>
                <select class="terms-right-part1-select">
                    <option value="ppn(11%)">ppn(11%)</option>
                    <option value="GST(18%)">GST(18%)</option>
                    <option value="GST 18%">GST 18%</option>
                </select>
            </div>
        </div>
        <div class="terms-right-part2">
            <div class="terms-right-part1-label"><label>Discount</label></div>
            <div>
                <input class="terms-right-part2-input" type="number" >
            </div>
            <div class="terms-right-part1-label"><label>Shipping</label></div>
            <div>
                <input class="terms-right-part2-input" type="number">
            </div>
        </div> 
        <div class="terms-right-part3-container">
            <div class="terms-right-part3-div">Order Tax<span class="terms-right-part3-span">Q.00</span></div>
            <div class="terms-right-part3-div">Discount<span class="terms-right-part3-span">Q.00</span></div>
            <div class="terms-right-part3-div">Shipping<span class="terms-right-part3-span">Q.00</span></div>
            <div class="terms-right-part3-div">Grand Total<span class="terms-right-part3-span">Q.00</span></div>
        </div>        
            <button class="terms-btn" type="submit">save</button></div>
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
div.newtransfer-maincontent{
  flex: 1;
  padding-left: 260px;
 
}
.span1{
    margin: 10px;
    margin-left: 20px;
    border-right: 1px solid rgb(227 227 233);
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
.language{
    color: rgb(115, 115, 248);
    border: none;
}
.savebtn{
    clear: right;
    background-color: rgb(9, 9, 250);
    color: white;
    border: unset;
    margin-left: 60%;
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
section.sec2{
    border-radius: 5px;
    background-color: white;
    padding: 2px;
    margin: 16px;
}
input.input-cont{
    height: 30px;
    width: 300px;
    border-style: solid;
    border-color: rgb(224, 224, 224);
    color: rgb(224, 224, 224);
}
select.input-cont{
    height: 35px;
    width: 280px;
    border-style: solid;
    border-color: rgb(224, 224, 224);
    color: rgb(224, 224, 224);
}
button.input-cont{
    height: 35px;
    background-color:#f8f8f8;
    border-style: solid;
    border-color: lightgray;
    padding: 8px;
    margin-left: 5px;
}
.product-input{
    width: 95%;
    height: 35px;
    margin-top: 10px;
    border-radius: 5px;
    border-style: solid;
    border-color: lightgray;
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
table{
    width: 100%;
    border: 1px solid rgb(241, 234, 234);
    border-collapse: collapse;
}
th{
    background-color: rgb(224, 223, 223);
    color: rgb(37, 37, 37);
    font-weight: 200;
}
tfoot{
    background-color:rgb(250, 248, 248);
    text-align: center;
    width:100%
    
}
.terms-left{
    margin: 10px;
    float: left;
    margin-right: 500px;
    margin-bottom: 250px;
}
.terms-right{
    margin: 10px;
    clear: right;
    margin-left: 0px
}
textarea.terms-container-text{
    width: 300%;
    height: 50px;
    margin-top: 10px;
    border-style: solid;
    border-color: lightgray;
}

.terms-right-part1-label{
    margin-top: 10px;
}

.terms-right-part2-input{
    margin-top: 10px;
    width: 292px;
    height: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: lightgray;
}
select.terms-right-part1-select{
    width: 300px;
    height: 35px;
    margin-top: 10px;
    border-style: solid;
    border-color: lightgray;
}



div.terms-right-part3-div{
    display: flex;
    justify-content: space-between;
    margin: 15px;
    margin-left: 10px;
    padding-left: 15px;
}
.terms-right-part3-span{
    margin-right: 75px;
}
button.terms-btn{
    margin-top: 20px;
    width: 300px;
    padding: 8px;
    background-color: rgb(9, 9, 250);
    color: white;
    border: unset;
    font-size: 15px;
    border-radius : 5px;
}
</style>
