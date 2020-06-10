<template>
 <div class="d-f">
 <div class="drawing1">
   <div class="drawing">
    <ve-radar :data="chartData" class="drawing"></ve-radar>
  </div>
  </div>
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
        }
   
   }
   },
   components: {

   },
   methods: {
      getdata(){
          axios.get('/api/radarChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartData.rows = res.data.data
                   console.log(res.data);
               }
          }).catch(err=>{
              console.log(err);
          })
      }
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
   height: 300%;
}
drawing1{
  width: 500px;
  height: 500px;
}
</style>