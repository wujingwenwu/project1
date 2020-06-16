<template>
 <div>
   <div class="d-f j-c-s-a m-t-10">
   <div>6 item left</div>
      
      <input type="button" value="All" class="buttona" />
      <div>Active</div>
     <div>Completed</div>
      
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