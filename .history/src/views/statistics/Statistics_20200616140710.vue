<template>
 <div>
   <div class="d-f">
    <div class="stat d-f j-c-c a-i-c f-d-c">
      <div class="d-f">
      <div class="f-s-14 f-c-b m-l-20">今日发布</div>
      
      <i class="iocnfont el-icon-check"></i>
      </div>
      <div class="f-s-14 f-c-b">{{today.length}}</div>
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
   <div class="d-f j-c-s-a">
      <Statisticsone></Statisticsone>
      <Statisticstwo></Statisticstwo>
   </div>
   <div>
     <ve-waterfall :data="chartData"></ve-waterfall>
   </div>
 </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
import axios from 'axios'
import Statisticsone from '../../components/statistics/Statisticsone'
import Statisticstwo from '../../components/statistics/Statisticstwo'
import dayjs from 'dayjs'
 export default {
   name:'',
   props:{

    },
   data () {
    
     return {
       chartData: {
          columns: ['分类', '数量'],
          rows: [
           
          ]
        },
        today:[]
      }
  
   },
   components: {
      Statisticsone,
      Statisticstwo
   },
   methods: {
        getdata(){
          axios.get(`/api/article/allArticle`).then(res=>{
           res.data.data.map(item => {
              item.date = dayjs(item.date).format("YYYY年MM月DD日");
            });
          let obj = groupBy(res.data.data,'date')
          for(let i in obj) {
              this.chartData.rows.push({
                  '数量': obj[i].length,
                  '分类': i
              })
          }
          this.today = res.data.data.filter(item=>{
              return item.date === dayjs().format("YYYY年MM月DD日")
              
          })
           console.log(this.today);
          this.original = res.data.daya.filter(item=>{
              return item.source ==== source
          })
           
          
          }).catch(err=>{
              console.log(err);
          })
      },
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