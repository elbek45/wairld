<template>
  <div id="loginPage">
    <div class="loginPageContent">
      <div class="loginPageCol loginPageColBg">
        <div class="loginPageColBgHead">
          <img src="/img/logo-min.png" width="190px" alt="">
        </div>
        <div class="loginPageColBgBody">
          <img src="/img/login-img.svg" alt="">
        </div>
        <div class="loginPageColBgFooter">
          <strong>Lorem Ipsum is simply </strong>
          <span>Lorem Ipsum is simply </span>
        </div>
      </div>
      <div class="loginPageCol loginPageColForm" v-loading="loadRunning">
        <div class="loginPageColFormHead">
          <h1>Kirish</h1>
          <span>Platformaga kirish uchun telefon raqam va parolingizni kiriting</span>
        </div>
        <el-form ref="form" :model="form" label-position="top" @submit.prevent.native="submit">
          
          <el-form-item label="Telefon raqam" prop="username" :rules="[vRequired]">
            <phone-input v-model="form.username" placeholder="+998 __   ___   __   __" />
          </el-form-item>
          
          <el-form-item label="Parol" prop="password" :rules="[vRequired]">
            <el-input placeholder="Parolingizni kiriting" type="password" v-model="form.password" />
          </el-form-item>
          
          <div class="text-end">
            <nuxt-link to="/reset-password" class="link">Parolingizni unutdingizmi?</nuxt-link>
          </div>
          
          <div class="loginPageColFormFooter">
            <button class="btn btn-success w-100">Kirish</button>
          </div>
          <div class="text-center pt-4">
            Sizda shaxsiy kabinet mavjud emasmi? <nuxt-link to="/#enterForm" class="link">Ro’yxatdan o’tish</nuxt-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  layout: 'Empty',
  components:{
  },
  data(){
    return {
      form: {
        username: "",
        password: "",
      }
    }
  },
  computed:{
    redirectUrl(){
      return this.$route.query['redirect_url'];
    }
  },
  methods:{
    ...mapActions({
      login: 'auth/login',
      getCurrentUser: 'auth/getCurrentUser',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.login(this.form).then(res => {
            this.getCurrentUser().then(res => {
              if(this.redirectUrl){
                this.$router.push(this.redirectUrl);
              }else{
                this.$router.push('/cabinet/profile');
              }
            })
          })
        }
      });
    },
  }
}
</script>
