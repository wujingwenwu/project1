<template>
 <div>
 <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
       <ordera></ordera>
    </el-card>
  </el-col>
  </el-row>
  <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
       <orderb></orderb>
    </el-card>
  </el-col>
  </el-row>
  <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
      <orderc></orderc>
    </el-card>
  </el-col>
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

</style>