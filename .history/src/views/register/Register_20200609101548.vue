<template>
 <div>
    <div class="register">
     <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="uesrname">
              <el-input v-model="ruleForm.uesrname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
              <el-button type="primary" @click="logins('ruleForm')">立即注册</el-button>
             
            </el-form-item>
          </el-form>
     </div>
    </div>
 </div>
</template>

<script>
import axios from 'axios'
 export default {
   name:'',
   props:{

    },
   data () {
     return {
      uesrname:'',
      password:''
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