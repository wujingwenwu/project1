<template>
 <div>
 <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
 </div>
</template>

<script>
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
           console.log(res.data);
          }).catch(err=>{
              console.log(err);
          })
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

</style>