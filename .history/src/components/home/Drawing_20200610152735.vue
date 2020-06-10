<template>
 <div>
 <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
          <radar></radar>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <ring></ring>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always">
          <home-chat></home-chat>
        </el-card>
      </el-col>
    </el-row>


  
 </div>
</template>

<script>
import Drawinga from '../drawing/Drawinga'
import Drawingb from '../drawing/Drawingb'
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
        
        
   }
  
   },
   components: {
      Drawinga,
      Drawingb,
      

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
.drawing{
   width: 300px;
   height: 350px;
}
</style>