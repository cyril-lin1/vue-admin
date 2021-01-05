<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="login-box">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" placeholder="请输入用户名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onLogin('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        password: '',
      },
      rules: {
        name: [
          {
            min: 3, message: '长度至少3个字符', trigger: 'blur',
          },
        ],
        password: [
          {
            min: 6, message: '长度至少6个字符', trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    onLogin(form) {
      console.log('login');
      this.$refs[form].validate((valid) => {
        console.log(valid);
        if (valid) {
          this.$router.push('/view/main');
          return true;
        }
        this.$message.error('请输入用户名和密码');
        return false;
      });
    },
  },
};
</script>

<style scoped>
  .login-box {
    width: 350px;
    margin: 150px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
  }
  .login-title {
    text-align: center;
  }
</style>
