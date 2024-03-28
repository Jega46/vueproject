<template>
<div class="stocktransfer-maincontent">
 
    <section class="sec1">
     <header >
        <span class="span1">
          <div class="clock" @click="showPopup"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15">
             <circle cx="12" cy="12" r="10" fill="none" stroke="blue" stroke-width="2" />
             <line x1="12" y1="12" x2="15" y2="12" stroke="blue" stroke-width="2" />
             <line x1="12" y1="12" x2="12" y2="9" stroke="blue" stroke-width="2" />
          </svg>  Clock In</div>
        </span>
        <span class="span1">POS</span>
        <span class="span1">Electronifly</span>
        <span class="span1"><select class="language" v-model="selectedLanguage"><option value="English">En</option></select></span>
        <span class="span1"><i class="fa fa-user"></i></span>

        <div v-if="showModal" class="popup-overlay">
    <div class="popup">
      <div class="popup-header">
        <h5 class="popup-title">Clock In Information</h5>
        <button @click="closePopup" class="close-btn">&times;</button>
      </div>
      <div class="popup-body">
        <p>IP Address: {{ ipAddress }}</p>
        <p>Current Time: {{ currentTime }}</p>
      </div>
      <div class="popup-footer">
        <button @click="closePopup" class="btn-primary">Close</button>
      </div>
    </div>
  </div>
     </header>
    <hr>
    <p class="stock">Stock Transfer</p>
    <div class="stock2"><p>Dashboard - <span>Stock Transfer</span></p></div>
    <hr>
    
    <div class="addbtn">
  
    <router-link to="/CreateNewTransfer"><button ><span class="plus">+</span> Add New Transfer</button></router-link>
  </div>
        <span class="span2">
            <div class="aaa">
            <span class="aab"> <input type="search" class="search-input" placeholder="search by Invoice Number"></span></div>
             <div class="aaa"><select id="aaa" class="search-input"><option value="Select Warehouse">Select warehouse</option></select></div>
             <div class="aaa">
              <div class="date-input-wrapper">
                 <input 
                 id="dateRange" class="search-input" type="text" v-model="dateRange" @input="parseDateRange"
                  placeholder="YYYY-MM-DD to YYYY-MM-DD" ref="datePickerInput">
                  <i class="fas fa-calendar-alt" @click="showDatePicker"></i>
                </div>
              </div> 
              
              
  </span>
</section>
<section class="sec2">   
     
        <div class="trans-rece">
    <button class="trans-rece" @click="showTransfered">Transfered</button>
    <button class="trans-rece" @click="showReceived">Received</button>
    <div><hr></div>
    
    <div v-if="currentPart === 'transfered'">
      <table>
        <thead>
          <tr>
            <th></th>
            <th><input type="checkbox"></th>
            <th>Invoice Number</th>
            <th>Warehouse</th>
            <th>Stock Transfer</th>
            <th>Stock Transfer Status</th>
            <th>Paid Amount</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- Replace these placeholder rows with actual data -->
          <tr v-for="item in transferedItems" :key="item.id">
            <td></td>
            <td></td>
            <td>{{ item.invoiceNumber }}</td>
            <td>{{ item.warehouse }}</td>
            <td>{{ item.stockTransfer }}</td>
            <td>{{ item.stockTransferStatus }}</td>
            <td>{{ item.paidAmount }}</td>
            <td>{{ item.totalAmount }}</td>
            <td>{{ item.paymentStatus }}</td>
            <td>{{ item.action }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="currentPart === 'received'">
      <table>
        <thead>
          <tr>
            <th></th>
            <th><input type="checkbox"></th>
            <th>Invoice Number</th>
            <th>Warehouse</th>
            <th>Stock Transfer</th>
            <th>Stock Transfer Status</th>
            <th>Paid Amount</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
     
          <tr v-for="item in receivedItems" :key="item.id">
            <td></td>
            <td></td>
            <td>{{ item.invoiceNumber }}</td>
            <td>{{ item.warehouse }}</td>
            <td>{{ item.stockTransfer }}</td>
            <td>{{ item.stockTransferStatus }}</td>
            <td>{{ item.paidAmount }}</td>
            <td>{{ item.totalAmount }}</td>
            <td>{{ item.paymentStatus }}</td>
            <td>{{ item.action }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>


</section>
</div>

</template>


<script>
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
export default {
  name: 'stocktransfer',
  data() {
    return {
      dateRange: '',
      startDate: '',
      endDate: '',
      currentPart: 'transfered',
      selectedLanguage: 'English',
      showModal:false,  currentPart: 'transfered', 
      transferedItems: [],
      receivedItems: []
    };
  },
  methods: {
    showPopup() {
    
      this.ipAddress = '127.0.0.1';
      this.currentTime = new Date().toLocaleTimeString(); 

      this.showModal = true;
    },
    closePopup() {
      this.showModal = false;
    },
    parseDateRange() {
      const dates = this.dateRange.split(' to ');
      if (dates.length === 2) {
        this.startDate = dates[0];
        this.endDate = dates[1];
      } else {
        this.startDate = '';
        this.endDate = '';
      }
    },
    showDatePicker() {
      flatpickr(this.$refs.datePickerInput, {
        mode: 'range',
        dateFormat: 'Y-m-d',
        onClose: function (selectedDates, dateStr, instance) {
          instance.setDate(selectedDates);
        }
      });
    },
    showTransfered() {
      this.currentPart = 'transfered';
    },
    showReceived() {
      this.currentPart = 'received';
    }
  }

};

</script>

<style scoped>

div.stocktransfer-maincontent{
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
    border-right: 1px solid rgb(227 227 233);
    color: rgb(115, 115, 248);
   padding-right:30px
}
table{
    width: 100%;
    border: 1px solid rgb(241, 234, 234);
    border-collapse: collapse;
}
th{
  padding: 10px;
    background-color: rgb(224, 223, 223);
    color: rgb(37, 37, 37);
    font-weight: 200;
}
td{
    background-color:rgb(250, 248, 248);
    padding: 10px;
    color: rgb(252, 249, 249);
    
}

p.stock{
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 0%;
}
div .stock2{
    margin-top: 0px;
}
.addbtn{
    float: left;
}
.span2{
    display: flex;
    justify-content: flex-end;
    clear: right;    

}
input.search-input{
    padding-right: 20px;
    height: 30px;
    border-style: solid;
    border-color:rgb(224, 224, 224);
    color:rgb(224, 224, 224) ;

}

.aaa{
    margin-right: 30px;
}
#aaa{
    height: 30px;
    width: 195px;
    border-color:rgb(221, 214, 214);
    color:rgb(202, 192, 192) ;
}
#aaa:hover{
    border-color: rgb(180, 226, 241);
}
#dateRange{
    height: 25px;
}
svg{
 color: blue;
}
.language{
    color: rgb(115, 115, 248);
    border: none;
}
button{
    margin:10px;
    padding: 5px;
    background-color: rgb(10, 172, 247);
    color:white;
    border: unset;
    height: 30px;
    font-size: medium;
}
.plus{
    padding-right: 10px;
    padding-left: 5px;
 
}



.date-input-wrapper {
  position: relative;
}

.fas.fa-calendar-alt {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: rgb(235, 227, 227);
}
.trans-rece{
    margin: 10px;
    background-color: unset;
    color: black;
    font-size: 15px;
    
}
button.trans-rece:hover{
    cursor: pointer;
    border-bottom: 2px inset rgb(118, 118, 255);
    color: rgb(94, 94, 245);
}
div.trans-rece{
    margin-top: 20px;
   
    
}
section.sec1{
    background-color: white;
    padding:20px;
    border-radius: 5px;
}

</style>

