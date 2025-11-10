<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone enterFormModal"
    append-to-body>
    
    <div class="enterFormBody" v-loading="loadRunning">
      <div class="enterForm">
  
        <h4 class="modalTitle">Sign In</h4>
  
        <div class="delTxt">with</div>
        <div class="snSignButtons">
          <a href="#" @click.prevent="authSocial('google')">
            <img src="/img/icons/google-btn.svg" alt="">
          </a>
          <a href="#" @click.prevent="authSocial('facebook')">
            <img src="/img/icons/facebook-btn.svg" alt="">
          </a>
        </div>
        <div class="delTxt">or enter the</div>
        
        <el-form ref="form" :model="form" label-position="top" @submit.prevent.native="submit">
    
          <el-form-item  prop="username" :rules="[vRequired]">
            <el-input placeholder="email or username" prefix-icon="icon-user" v-model="form.username" />
          </el-form-item>
          
          <el-form-item prop="password" :rules="[vRequired]">
            <el-input placeholder="password" prefix-icon="icon-password" type="password" v-model="form.password" />
          </el-form-item>
    
          <div class="enterFormSubmit">
            <button class="btn btn-primary btn-large w-100" type="submit">Sign In</button>
          </div>
    
          <div class="enterFormFooter">
            Not a member? <a href="#" @click.prevent="toRegister">Sign Up now</a>
          </div>
          
        </el-form>
  
      </div>
    </div>
    
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import socialAuth from '@/mixins/socialAuth';
export default {
  mixins: [socialAuth],
  data() {
    return {
      outerVisible: false,
      form:{
        username: "",
        password: "",
      },
    };
  },
  computed: {
    queryModalShow(){
      return !!this.$route.query['login'];
    }
  },
  watch: {
    queryModalShow(val){
      if(this.outerVisible != val){
        this.outerVisible = val;
      }
    },
    outerVisible(val){
      if(!val){
        this.changeQuery('login', null);
      }
    }
  },
  mounted() {
    this.outerVisible = this.queryModalShow;
  },
  methods: {
    ...mapActions({
      login: 'auth/login',
      getCurrentUser: 'auth/getCurrentUser'
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.login(this.form).then(_ => {
            this.getCurrentUser().then(res => {
              this.toCabinet();
            })
          })
        }
      })
    },
    toRegister(){
      this.changeQuery('login', null);
      setTimeout(() => {
        this.changeQuery('register', '1');
      }, 100)
    }
  },
};
</script>