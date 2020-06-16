<template>
 <div class="item1">
  <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
 </div>
</template>

<script>
import groupBy from 'lodash/groupBy'
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     this.chartSettings = {
        roseType: 'radius'
      }
     return {
       chartData: {
          columns: ['分类', '数量'],
          rows: [
           
          ]
        }
      }
   
   },
   components: {

   },
   methods: {
      getdata(){
          axios.get(`/api/article/allArticle`).then(res=>{
          let obj = groupBy(res.data.data,'source')
          for(let i in obj) {
              this.chartData.rows.push({
                  '数量': obj[i].length,
                  '分类': i
              })
          }
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
.item1{
  width: 300px;
  height: 300px;
  margin-top: 30px;
}
</style>