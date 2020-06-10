<template>
 <div class="d-f j-c-s-a">
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
      Drawinga
   },
   methods: {
      getdata(){
          axios.get('/api/radarChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartDatas.rows = res.data.data
               }
          }).catch(err=>{
              console.log(err);
          })
      },
    
   },
   mounted() {
      this.getdata()
      
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