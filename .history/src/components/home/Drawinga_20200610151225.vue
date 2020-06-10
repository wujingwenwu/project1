<template>
 <div>
    <ve-pie :data="chartData"></ve-pie>
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
          columns: [],
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
                   this.chartData.rows = res.data.data
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
</style>