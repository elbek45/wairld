<template>
  <div class="contactsForm">
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">
      
      <el-form-item prop="name" :rules="[vRequired]" class="required">
        <el-input v-model="form.name" placeholder="Name" />
      </el-form-item>

      <el-form-item prop="company_name" :rules="[vRequired]" class="required">
        <el-input v-model="form.company_name" placeholder="Company name" />
      </el-form-item>

      <el-form-item prop="email" :rules="[vRequired]" class="required">
        <el-input v-model="form.email" suffix-icon="icon-mail" placeholder="yourmail@gmail.com" />
      </el-form-item>
      
      <el-form-item class="c-select required" prop="investment_amount" :rules="[vRequired]">
        <!-- c-select-arrow -->
        <el-select v-model="form.investment_amount" suffix-icon="icon-mail" placeholder="Select type of offer">
          <el-option v-for="(item,index) in amounts" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item prop="phone_number" :rules="[]">
        <el-input v-model="form.phone_number" class="input-with-select" suffix-icon="icon-ph_phone">
          <el-select v-model="form.phone_country" slot="prepend" placeholder="Select" :style="`background-image: url(/img/flags/${form.phone_country}.png);`">
            <el-option v-for="(country,index) in countriesList" :key="index" :label="country.dial_code" :value="country.id">
              <span style="float: left">
                <img :src="`/img/flags/${country.id}.png`" width="28px" class="me-2" alt="">
                {{ country.label }}
              </span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ country.dial_code }}</span>
            </el-option>
          </el-select>
        </el-input>
      </el-form-item>
      
      <el-form-item prop="message" :rules="[]">
        <el-input v-model="form.message" type="textarea" rows="5" placeholder="Your message" />
      </el-form-item>

      <div class="text-end pt-4 partnershipModalBodySubmit">
        <button class="btn btn-first">Send</button>
      </div>

    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import countries from '~/utils/countries';
export default {
  data() {
    return {
      form:{
        name: "",
        company_name: "",
        email: "",
        investment_amount: "",
        phone_country: "UZ",
        phone_number: "",
        message: "",
      },
    };
  },
  computed: {
    amounts(){
      return [
        "Up to 100k $",
        "100-500k $",
        "Up to 1m $",
        "Up to 5m $",
        "Up to 10m $",
        "Up to 50m $",
        "Up to 100m $",
        "More than 100m $",
      ];
    },
    countriesList(){
      return countries;
    },
    phoneMask(){
      var selectCountry = this.countriesList.find(item => this.form.phone_country == item.id); 
      return `${selectCountry.dial_code} (###) ###-###`;
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      fromInvestors: 'partnership/fromInvestors',
    }),
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.fromInvestors(this.form).then(res => {
            this.$alert('We will contact you shortly', 'Your message has been sent successfully', {
              type: 'success',
              center: true,
              closeOnClickModal: true,
              showConfirmButton: false
            });
            this.changeQuery('partnership', null);
          })
        }
      })
    },
  },
};
</script>