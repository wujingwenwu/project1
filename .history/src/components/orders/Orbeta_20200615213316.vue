<template>
 <div>
   <div class="d-f j-c-s-a m-t-20">
      <input type="button" value="6 item left" class="buttons" />
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