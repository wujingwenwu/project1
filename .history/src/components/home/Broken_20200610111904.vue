<template>
 <div>
 <ve-line :data="chartData"></ve-line>
 </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
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
      VeLine 
   },
   methods: {
       getData() {
           axios.get('/api/homeChat').then(res => {
               console.log(res.data);
           }).catch(err => {
               console.log(err);
           })
       }
   },
   mounted() {
      this.getData()
   },
   watch: {

   },
   computed: {

   },
  created () {
    this.chartData = {
      columns: ['日期', '销售量'],
      rows: []
    }
  }, 
 }
</script>

<style scoped lang='scss'>

</style>