<template>
 <div class="broken">
 
 <ve-line :data="chartData"></ve-line>
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
             columns: ['date','', 'expected', 'actual' ],
             rows: []
         }
   }
   },
   components: {
       
   },
   methods: {
       getData() {
           axios.get('/api/homeChat').then(res => {
               if (res.data.code === 0) {
                   this.chartData.rows = res.data.data
               }
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
 }
</script>

<style scoped lang='scss'>
.broken{
    margin-top: 30px;
    background: white;
}
</style>