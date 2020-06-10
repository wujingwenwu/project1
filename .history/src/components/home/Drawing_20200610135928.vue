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

   }
   },
   components: {

   },
   methods: {
      getdata(){
          axios.get('/api//radarChat').thien(res=>{
              if (res.data.code === 0) {
                   this.chartData.rows = res.data.data
               }
          }).catch(err=>{
              console.log(err);
          })
      }
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