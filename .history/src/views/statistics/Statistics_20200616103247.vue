<template>
 <div>
   <div class="d-f">
    <div class="stat d-f j-c-c a-i-c f-d-c">
      <div class="d-f">
      <div class="f-s-14 f-c-b m-l-20">今日发布</div>
      
      <i class="iocnfont el-icon-check"></i>
      </div>
      <div class="f-s-14 f-c-b">1</div>
    </div>

    <div class="stat1 d-f j-c-c a-i-c f-d-c">
      <div class="d-f">
      <div class="f-s-14 f-c-b m-l-20">原创文章</div>
      
      <i class="iocnfont el-icon-tickets"></i>
      </div>
      <div class="f-s-14 f-c-b">1</div>
    </div>

    <div class="stat2 d-f j-c-c a-i-c f-d-c">
      <div class="d-f">
      <div class="f-s-14 f-c-b m-l-20">新留言</div>
      
      <i class="iocnfont el-icon-bell"></i>
      </div>
      <div class="f-s-14 f-c-b">0</div>
    </div>

    <div class="stat3 d-f j-c-c a-i-c f-d-c">
      <div class="d-f">
      <div class="f-s-14 f-c-b m-l-20">新消息</div>
      
      <i class="iocnfont el-icon-phone-outline"></i>
      </div>
      <div class="f-s-14 f-c-b">0</div>
    </div>
   </div>
 </div>
</template>
import groupBy from 'lodash/groupBy'
import axios from 'axios'
<script>
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
          axios.get(`/api/article/allArticle`).then(res=>{
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
.stat{
    width: 330px;
    height: 50px;
    background: rgb(124, 202, 191);
    margin-top: 1px;
}
.iocnfont{
    font-size: 22px;
    color: white;
    position: relative;
    left: 80px;
    top: 8px;
}
.stat1{
    width: 330px;
    height: 50px;
    background: rgb(232, 138, 138);
}
.stat2{
    width: 330px;
    height: 50px;
    background: rgb(131, 117,163);
}
.stat3{
    width: 330px;
    height: 50px;
    background: rgb(159, 206, 193);
}
</style>