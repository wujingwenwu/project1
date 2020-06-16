<template>
 <div>
   <div class="d-f j-c-s-a m-t-20">
   <div>6 item left</div>
      
      <input type="button" value="All" class="buttona" />
      <input type="button" value="Active" class="buttons" />
      <input type="button" value="Completed" class="buttons" />
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
    todos: {
      type: Array,
      default: () => {},
    }
    },
   data () {
     return {

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