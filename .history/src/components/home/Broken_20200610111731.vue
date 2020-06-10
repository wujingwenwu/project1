<template>
 <div>
 <ve-line :data="chartData"></ve-line>
 </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
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

   },
   mounted() {
      
    
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