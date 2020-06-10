<template>
 <div class="item">
    <ve-radar :data="chartData"></ve-radar>
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
          columns: [ 'sales', 'ministration', 'techology','delelopmer','marketing'],
          rows: [],
        },
   }
   },
   components: {

   },
   methods: {
        getdata(){
          axios.get('/api/radarChat').then(res=> {
              if (res.data.code === 0) {
                   this.chartDatas.rows = res.data.data
               }
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
.item{
    width: 300px;
    height: 400px;
    background: white;
}
</style>