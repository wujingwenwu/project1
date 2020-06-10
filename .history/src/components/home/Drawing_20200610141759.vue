<template>
 <div>
   <div class="d-f">
    <ve-radar :data="chartData"></ve-radar>
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
          columns: ['name', 'sales', 'ministration', 'techology','delelopmer','marketing'],
          rows: [],
        }
   
   }
   },
   components: {

   },
   methods: {
      getdata(){
          axios.get('/api//radarChat').thien(res=>{
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

</style>