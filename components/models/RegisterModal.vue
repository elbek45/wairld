<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="560px"
    class="headerNone enterFormModal"
    append-to-body>
    
    <div class="enterFormBody" v-loading="loadRunning">
      <div class="enterForm">
  
        <h4 class="modalTitle">Connect wallet</h4>

        <div class="text-center mb-4">
          <a href="#">
            <img src="/img/logos_metamask.svg" alt="">
          </a>
        </div>
        
        <div class="delTxt">or</div>

        <h4 class="modalTitle">Sign Up</h4>
  
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
        
        <el-form v-if="step==1" ref="form" :model="form" label-position="top" @submit.prevent.native="submit">

          <el-form-item prop="name" :rules="[vRequired]">
            <el-input placeholder="name" prefix-icon="icon-user" v-model="form.name" />
          </el-form-item>
          
          <el-form-item prop="email" :rules="[vRequired]">
            <el-input placeholder="email" prefix-icon="icon-user" v-model="form.email" />
          </el-form-item>
          
          <el-form-item prop="password" :rules="[vRequired]">
            <el-input placeholder="password" prefix-icon="icon-password" type="password" v-model="form.password" />
          </el-form-item>
          
          <el-form-item prop="password_confirmation" :rules="[vRequired]">
            <el-input placeholder="confirm password" prefix-icon="icon-password" type="password" v-model="form.password_confirmation" />
          </el-form-item>

          <el-form-item prop="agreed" :rules="[vRequired]">
            <el-checkbox class="agreeCheckbox" v-model="form.agreed">Accept the <a href="#" target="_blank">Terms and Conditions</a></el-checkbox>
          </el-form-item>
    
          <div class="enterFormSubmit">
            <button class="btn btn-primary btn-large w-100" type="submit">Sign In</button>
          </div>
          
        </el-form>

        <el-form v-if="step==2" ref="codeForm" :model="codeForm" label-position="top" @submit.prevent.native="codeSubmit">

          <el-form-item prop="code" :rules="[vRequired]">
            <el-input placeholder="code" prefix-icon="icon-password" v-model="codeForm.code" />
          </el-form-item>

          <div class="mb-3 text-center">
            <a href="#" class="link" @click.prevent="step=1">back</a>
          </div>

          <div class="enterFormSubmit">
            <button class="btn btn-primary btn-large w-100" type="submit">Sign In</button>
          </div>

        </el-form>

        <div class="enterFormFooter">
          Already have an account? <a href="#" @click.prevent="toLogin">Sign In now</a>
        </div>
        
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
      step: 1,
      form:{
        code: "",
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        agreed: false,
      },
      codeForm: {
        code: ""
      }
    };
  },
  computed: {
    queryModalShow(){
      return !!this.$route.query['register'];
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
        this.changeQuery('register', null);
      }
    }
  },
  mounted() {
    this.outerVisible = this.queryModalShow;
  },
  methods: {
    ...mapActions({
      register: 'auth/register',
      sendCode: 'auth/sendCode',
      getCurrentUser: 'auth/getCurrentUser'
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.sendCode({email: this.form.email}).then(res => {
            this.step = 0;
            this.$nextTick(_ => {
              this.step = 2;
            })
          })
        }
      })
    },
    codeSubmit(){
      this.$refs['codeForm'].validate((valid) => {
        if (valid) {
          this.form['code'] = this.codeForm.code;
          this.register(this.form).then(_ => {
            this.getCurrentUser().then(res => {
              this.toCabinet();
            })
          })
        }
      })
    },
    toLogin(){
      this.changeQuery('register', null);
      setTimeout(() => {
        this.changeQuery('login', '1');
      }, 100)
    }
  },
};
</script>