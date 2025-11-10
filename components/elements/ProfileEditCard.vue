<template>
  <div class="profileEditCard c-card" v-loading="loadRunning">
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit" v-if="currentProfile">
      <div class="profileEditForm">
        <div class="sm-title">Personal information:</div>
        <el-form-item label="name" prop="full_name" :rules="[vRequired]">
          <el-input v-model="form.full_name" />
        </el-form-item>
        <el-form-item label="country" prop="country_id" :rules="[vRequired]">
          <el-select filterable v-model="form.country_id" placeholder="Select">
            <template slot="prefix" v-if="selectedCountry">
              <span :style="`background-image: url(${selectedCountry.flag})`" class="country-itemflag"></span>
            </template>
            <el-option
              v-for="(item,index) in countries"
              :key="index"
              :label="item.name"
              :value="item.id">
              <span :style="`background-image: url(${item.flag})`" class="country-itemflag"></span>
              <span class="country-itemlabel">{{ item.name }}</span>
            </el-option>
          </el-select>
        </el-form-item>
      </div>

      <div class="profileEditForm">
        <div class="sm-title">Contact information</div>
        <el-form-item label="e-mail" prop="email" :rules="[vRequired]">
          <el-input v-model="form.email" type="email" />
        </el-form-item>
        <el-form-item label="phone number" prop="phone_number" :rules="[vRequired]">
          <el-input v-model="form.phone_number" type="tel" />
        </el-form-item>
      </div>

      <div class="profileEditForm">
        <div class="sm-title">Social media</div>
        <el-form-item prop="social_media" :rules="[]">
          <SocialMediaInput v-model="form.social_media" />
        </el-form-item>
      </div>

      <div class="profileEditForm profileEditFormPassword">
        <div class="sm-title">Password</div>
        <el-form-item prop="password">
          <el-input 
            v-model="form.password" 
            :type="showPassword?'':'password'">
            <i slot="suffix" class="icon-ShowPassword" @click="showPassword=!showPassword"></i>
          </el-input>
          <a href="#" class="link link-suffix" @click.prevent="showChangePasswordModal=true">
            <span>Change</span> <i class="icon-jam_refresh"></i>
          </a>
        </el-form-item>
      </div>
      <div class="text-end">
        <button class="btn btn-second">Update</button>
      </div>
    </el-form>

    <ChangePasswordModal
      v-if="showChangePasswordModal"
      :show="showChangePasswordModal"
      @submited="submitedPassword"
      @closed="showChangePasswordModal=false" />
    
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import SocialMediaInput from '@/components/elements/SocialMediaInput'
import ChangePasswordModal from '@/components/models/ChangePasswordModal'
export default {
  components:{
    SocialMediaInput,
    ChangePasswordModal
  },
  data(){
    return {
      showChangePasswordModal: false,
      showPassword: false,
      form: {
        full_name: "",
        email: "",
        country_id: "",
        phone_number: "",
        social_media: [],
        password: null
      }
    }
  },
  computed: {
    ...mapGetters({
      countries: 'classifiers/COUNTRIES'
    }),
    selectedCountry(){
      if(this.form.country_id && this.countries.length){
        return this.countries.find(item => item.id == this.form.country_id);
      }
      return null;
    }
  },
  watch:{
    currentProfile(val, oldVal){
      if(val){
        this.setForm();
      }
    }
  },
  mounted(){
    this.getCountries();
    this.setForm();
  },
  methods: {
    ...mapActions({
      getCountries: 'classifiers/getCountries',
      update: 'members/update',
      getCurrentUser: 'auth/getCurrentUser'
    }),
    submitedPassword(password){
      this.form.password = password;
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.update(this.form).then(res => {
            this.getCurrentUser();
            this.form.password = null;
            this.$alert('Profile editing was successful!', 'Success!', {
              type: 'success',
              center: true,
              closeOnClickModal: true,
            });
          })
        }
      });
    },
    setForm(){
      if(this.currentProfile){
        this.form.full_name = this.currentProfile.full_name;
        this.form.email = this.currentProfile.email;
        this.form.country_id = this.currentProfile.country_id;
        this.form.phone_number = this.currentProfile.phone_number;
        this.form.social_media = this.currentProfile.social_media;
      }
    }
  }
}
</script>
