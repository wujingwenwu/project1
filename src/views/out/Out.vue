<template>
 <div class="out1 d-f j-c-c m-t-30">
 <div>
  <div class="out">期待您的下次光临</div>
  <el-button type="primary" @click="clicked" class="out2">确定退出</el-button>
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

   }
   },
   components: {

   },
   methods: {
      clicked(){
        this.$message.success("期待您的下次光临");
        this.$router.push('/sigon');
        
      }
   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.out{
  font-size: 18px;
  font-weight: 700;
}
.out1{
  width: 100%;
  height: 622px;
}
.out2{
  margin-left: 20px;
  margin-top: 20px;
}
</style>