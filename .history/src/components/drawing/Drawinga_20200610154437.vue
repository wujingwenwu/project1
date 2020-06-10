<template>
 <div>
     <ve-ring :data="chartData" :settings="chartSettings"></ve-ring>
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
         getdata(){
          axios.get('/api/ringChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartData.rows = res.data.data
                   console.log(res.data);
                    this.chartData.columns = Object.keys(res.data.data[0])
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