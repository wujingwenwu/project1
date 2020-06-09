<template>
 <div>
    <div class="register">
  >
    </div>
 </div>
</template>

<script>
import axios from "axios";
 export default {
   name:'',
   props:{

    },
   data () {
     return {
       ruleForm: {
        uesrname: "",
        password: "",
        
      },
      rules: {
        uesrname: [
          {
            required: true,
            message: "用户名不能为空",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-10位之间",
            trigger: "blur"
          }
        ],
        rePwd: [
          {
            validator: validatePass,
            trigger: "blur"
          }
        ]
      }
   }
   },
   components: {

   },
   methods: {
       logins(){
           this.$refs.ruleForm.validate(valid=>{
               if(valid){
                   axios.post('/api/user/register',{
                      uesrname: this.ruleForm.uesrname,
                       password:this.ruleForm.password 
                   }).then(res=>{
                       if(res.data.code === 200){
                           this.$message.success('注册成功')
                           this.$router.push('/sigon')
                       } else{
                           this.$message.error(res.data.$message)
                       }
                   }).catch(err=>{
                       console.log(err);
                   })
                  
               }else{
                   this.$message.error('填写有误，请检查')
               }
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
.register{
    background: url('./30d161349739f1cf3487bc9aa8d541a8.gif');
    position:absolute;
    z-index:-1;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
}
</style>