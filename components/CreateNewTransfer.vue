<template>
<div>
    <header>
        
        <div>Clock In</div>
        <div>POS</div>
        <div>Electronifly</div>
        <div>En</div>
        <div>profile</div>

    </header>
    <hr>
    <h1>Stock Transfer</h1><span><button type="sumbit">Save</button></span>
    <div>
        <span>Dashboard</span> - <span>Purchases</span> - <span>Stock Transfer</span> - <span>Create</span></div>
</div>
<app-create></app-create>
</template>
<script>
import CreateNewTransfer from './CreateNewTransfer.vue'
export default{
  components :{
    'app-create' : CreateNewTransfer
  }
}

</script>

