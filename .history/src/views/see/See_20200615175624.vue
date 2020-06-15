<template>
 <div>
    <h2>{{arr.title}}</h2>
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
               this.id = res.data
            this.arr = res.data.data
           }).catch(err=>{
               console.log(err);
           })
       }
   },
   mounted() {
       this.id = this.$route.qyery.id
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