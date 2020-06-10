<template>
 <div>
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