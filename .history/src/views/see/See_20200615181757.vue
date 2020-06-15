<template>
 <div>
    <el-button type="primary">返回</el-button>
    <div class="d-f j-c-c f-d-c a-i-c">
    <h2>{{arr.title}}</h2>
    <h4>摘要：{{arr. abstract}}</h4>
    <h5 class="f-c-hu">发表于:{{arr.author}}</h5>
    </div>
    <div class="item m-t-20">
    
     <el-card shadow="always">
      {{arr. text}}
    </el-card>
    </div>
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
               this.id = res.data;
            this.arr = res.data.data
           }).catch(err=>{
               console.log(err);
           })
       }
   },
   mounted() {
       this.id = this.$route.query.id
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
.item{
    background: white;
    width: 100%;
}
</style>