<template>
 <div class="d-f j-c-s-a">
  <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    <ve-radar :data="chartData" class="drawing"></ve-radar>
       </div>
    </el-card>
  </el-col>

  <Drawinga></Drawinga>
  
  
  
 </div>
</template>

<script>
import Drawinga from './Drawinga'
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
         chartData: {
          columns: [ 'sales', 'ministration', 'techology','delelopmer','marketing'],
          rows: [],
        },
        
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