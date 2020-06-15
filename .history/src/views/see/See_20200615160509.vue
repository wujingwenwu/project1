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
      arr:[]
   } 
   },
   components: {

   },
   methods: {
       getdata(){
           axios.post(`/api/article/article`,{
               date:this.ruleForm.date,
         title:this.ruleForm.title,
        abstract:this.ruleForm.abstract,
       category:this.ruleForm.category,
        source:this.ruleForm.source,
       star:this.ruleForm.star,
        text:this.text,
        author:this.ruleForm.author,
           }).then(res=>{
               
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