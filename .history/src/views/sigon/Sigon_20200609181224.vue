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
            label-width="120px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="uesrname">
              <el-input v-model="ruleForm.uesrname "></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="请输入验证码" prop="verification">
              <el-input v-model="ruleForm.verification"></el-input>
            </el-form-item>

            <div v-html="code" class="sigon3" @click="loginc"></div>

            <el-form-item>
              <el-button type="primary" @click="logina('ruleForm')">立即登录</el-button>
              <el-button type="primary" @click="loginb('ruleForm')">立即注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  props: {},
  data() {
    return {
      ruleForm: {
        uesrname: "",
        password: "",
        verification: ""
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
        verification: [
          {
            required: true,
            message: "验证码不能为空",
            trigger: "blur"
          }
        ]
      },
      code: ""
    };
  },
  components: {},
  methods: {
    loginb() {
      this.$router.push("/register");
    },
    loginc() {
      axios
        .get("/api/captcha")
        .then(res => {
          this.code = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    logina() {
      axios
        .post("/api/user/login", {
          username: this.ruleForm.uesrname,
          password: this.ruleForm.password,
          code: this.ruleForm.verification
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success("登录成功");
            this.$router.push("/");
          } else {
            this.$message.error(res.data.message);
          }
           sessionStorage.setItem('user',JSON.stringify(res.data.data[0]))
           localStorage
        })
        .catch(err => {
          console.log(err);
        });
       
       
    }
  },
  mounted() {
    this.loginc();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.sigon {
  background: url("./5bdfc24df921ae60c92ca0893b51c2fa (1).gif");
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
}
.sigon1 {
  width: 700px;
  height: 450px;
  background: white;
}
.sigon2 {
  width: 350px;
  height: 25px;
}
.sigon3 {
  margin-left: 300px;
}
</style>