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
      id:'',
      
   } 
   },
   components: {

   },
   methods: {
       getdata(){
           axios.post(`/api/article/article`,{
            _id: this.id
           }).then(res=>{

           }).catch(err=>{
               console.log(err);
           })
       }
   },
   mounted() {
       console.log(this.$route);
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