<template>
 <div>
   
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      arr:[],
      
   } 
   },
   components: {

   },
   methods: {
       getdata(){
           axios.post(`/api/article/article`,{

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