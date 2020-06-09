<template>
 <div>
    <div class="sigon d-f j-c-c a-i-c">
    <div class="sigon1 d-f a-i-c f-d-c">
    <div class="f-s-18 m-t-20">欢迎来到小爱后台管理系统</div>
    <div class="f-s-18 m-t-20">登录</div>
     <div class="sigon2 m-t-20">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="uesrname">
              <el-input v-model="ruleForm.uesrname "></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="请输入验证码" prop="Verification">
              <el-input v-model="ruleForm.Verification"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login('ruleForm')">立即登录</el-button>
              <el-button type="primary" @click="logins('ruleForm')">立即注册</el-button>
             
            </el-form-item>
          </el-form>
     </div>
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
.sigon{
    background: url('./5bdfc24df921ae60c92ca0893b51c2fa (1).gif');
    position:absolute;
    z-index:-1;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
}
.sigon1{
   width: 700px;
   height: 400px;
   background: white;
}
.sigon2{
   width: 350px;
   height: 25px;
  
}
</style>