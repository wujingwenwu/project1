<template>
 <div>

   <Tails></Tails>
   <Broken></Broken>
   <Drawing></Drawing>
   <Order></Order>
 </div>
</template>

<script>
import Tails from '../components/home/Tails'
import Broken from '../components/home/Broken'
import  Drawing from  '../components/home/Drawing'
import  Order from  '../components/home/Order'
 export default {
   name:'',
   props:{
 
    },
   data () {
     return {

   }
   },
   components: {
      Tails,
      Broken,
      Drawing,
      Order,
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
