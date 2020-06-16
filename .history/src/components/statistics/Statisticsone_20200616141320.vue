<template>
 <div class="item">
 <ve-pie :data="chartData"></ve-pie>
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
          let obj = groupBy(res.data.data,'category')
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
.item{
    width: 400px;
    height: 300px;
    margin-top: 30px;
}
</style>