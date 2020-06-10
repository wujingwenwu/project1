<template>
 <div>
  <ordera></ordera>
  <orderb></orderb>
  <orderc></orderc>
 </div>
</template>

<script>
import axios from "axios";
import Ordera from '../order/Ordera'
import Orderb from '../order/Orderb'
import Orderc from '../order/Orderc'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
      Ordera,
      Orderb,
      Orderc
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