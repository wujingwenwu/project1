<template>
 <div class="orderc">
   <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="" width="300px">
   <div v-for="(item,index) in ass" :key="index" class="m-t-10 m-l-20">
   <div>{{item.name}}</div>
   <div v-if="item.progress!==1">
   <el-progress :percentage='item.progress*100'></el-progress>
   </div>
   <div v-if="item.progress ===1">
<el-progress :percentage="100" status="success"></el-progress>
</div>
 </div>
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
       ass:[]
   }
   },
   components: {

   },
   methods: {
       getdata(){
           axios.get('/api/progress').then(res=>{
               this.ass = res.data.data
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