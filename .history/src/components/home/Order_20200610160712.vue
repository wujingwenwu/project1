<template>
 <div>
 <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple"> <ordera></ordera></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"> <orderb></orderb></div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple"> <orderc></orderc></div></el-col>
 
</el-row>

  
  
  
 </div>
</template>

<script>
import axios from "axios";
import Ordera from '../order/Ordera'
import Orderb from '../order/Orderb'
import Orderc from '../order/Orderc'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
      Ordera,
      Orderb,
      Orderc
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>