<template>
 <div>
  <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
      <Drawingb></Drawingb>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
       <Drawinga></Drawinga>
       </div>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    
       </div>
    </el-card>
  </el-col>

  
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