<template>
 <div>
 123
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
             columns: [],
             rows: []
         }
   }
   },
   components: {
       
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
 }
</script>

<style scoped lang='scss'>

</style>