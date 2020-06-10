<template>
 <div>

   <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
   <i class="iconfont icon-renshu"></i>
   <div>
      <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
   </div>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <i class="iconfont icon-duanxin"></i>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <i class="iconfont icon-qian"></i>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <i class="iconfont icon-gouwuche"></i>
  </div></el-col>
</el-row>
 </div>
</template>

<script>
import axios from 'axios'
import dayjs from "dayjs";
 import countTo from 'vue-count-to';
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {

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
    background: white;
  }
  .bg-purple {
    background: white;
  }
  .bg-purple-light {
    background: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: white;
  }
  .icon-renshu{
    font-size: 40px;
    color: rgb(68, 200, 197);
  }
  .icon-duanxin{
      font-size: 40px;
    color: rgb(59, 162, 244);
  }
  .icon-qian{
      font-size: 40px;
    color: rgb(246, 137, 155) 
  }
  .icon-gouwuche{
       font-size: 40px;
    color: rgb(254, 209, 173) 
  }
</style>