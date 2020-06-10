<template>
 <div>
   <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="" width="300px">
   <el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
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

   }
   },
   components: {

   },
   methods: {
       getdata(){
           axios.get('/api/progress').then(res=>{
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