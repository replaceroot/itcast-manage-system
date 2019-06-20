<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" class="avatar">
      <el-form
        :model="loginForm"
        :rules="rules"
        ref="loginForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名" prefix-icon="myicon myicon-user"></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" prefix-icon="myicon myicon-key"></el-input>
          </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { userlogin } from '@/api/users.js'
export default {
  // 定义数据
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 添加验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登陆
    login () {
      // 实现用户的数据验证，因为之前的rules只是一个提示信息布局，并不会真正的阻止用户的登陆请求
      // 登录验证的时候，表单有一个validate函数，这个函数可以真正的实现表单元素的数据验证，这个验证与之前的，rules规则对应，当验证完成之后，会返回一个值给给回调函数，如果是true，说明验证通过，否则就不通过
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('这里的this是:', this)
          // 验证通过,就会发起登录请求
          console.log(this.loginForm)
          userlogin(this.loginForm)
            .then(result => {
              if (result.data.meta.status === 400) {
                this.$message({
                  message: result.data.meta.msg,
                  type: 'error'
                })
              } else {
                // 路由跳转
                this.$router.push({ name: 'Home' })
              }
            })
            .catch(() => {
              this.$message({
                message: '服务器异常,请重试',
                type: 'error'
              })
            })
        } else {
          // 给出用户提示
          this.$message({
            message: '数据输入不合法',
            type: 'error'
          })
          // 失败了一定要返回false,否则还会发送请求
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>
