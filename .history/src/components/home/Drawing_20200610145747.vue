<template>
 <div class="d-f">
  <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    <ve-radar :data="chartData" class="drawing"></ve-radar>
       </div>
    </el-card>
  </el-col>
   <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    <ve-pie :data="chartDatas"></ve-pie>
       </div>
    </el-card>
  </el-col>
  
  
 </div>
</template>

<script>
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
        chartDatas: {
          columns: ['sales', 'ministration'],
          rows: []
   },
   }
  
   },
   components: {

   },
   methods: {
      getdata(){
          axios.get('/api/radarChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartData.rows = res.data.data
               }
          }).catch(err=>{
              console.log(err);
          })
      },
      getdatas(){
          axios.get('/api/ringChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartDatas.rows = res.data.data
                   console.log(res.data);
               }
          }).catch(err=>{
              console.log(err);
          })
      }
   },
   mounted() {
      this.getdata(),
      this.getdatas()
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