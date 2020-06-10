<template>
 <div class="drawinga">
    <el-col :span="8">
    <el-card shadow="always" class="d-f j-c-c a-i-c">
        <div class="drawing">
    <ve-pie :data="chartData"></ve-pie>
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
          columns: ['sales', 'ministration', 'techology','delelopmer','marketing'],
          rows: []
   },
   }
   },
   components: {

   },
   methods: {
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
      this.getdatas()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.drawinga{
   width: 300px;
   height: 350px;
}

</style>