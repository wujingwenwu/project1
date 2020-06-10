<template>
 <div>
    <ve-histogram :data="chartData"></ve-histogram>
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
          columns: [],
          rows: []
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