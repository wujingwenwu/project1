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
           axios.post(`/api/article/allArticle`).then(res=>{
               
               console.log(res.data);
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