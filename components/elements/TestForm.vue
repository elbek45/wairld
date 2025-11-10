<template>
  <div>
    <el-form ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">
      
      <div class="contactsForm">
        <div class="form-type">
          <el-form-item prop="name" :rules="[vRequired]" class="required">
            <el-input v-model="form.name" placeholder="Name" />
          </el-form-item>
  
          <el-form-item prop="email" :rules="[vRequired]" class="required">
            <el-input v-model="form.email" suffix-icon="icon-mail" placeholder="yourmail@gmail.com" />
          </el-form-item>
        </div>
      </div>

      <div class="testForTester">
        <div class="testFormItem" v-for="(model,index) in models" :key="index">
          <div class="testFormItemQuestion">{{model.number}}. {{model.title}}</div>
          <div class="testFormItemTxt" v-if="model.type == 'checkbox'">(You can choose several variants)</div>
          <div class="testFormItemOptions">

            <el-form-item v-if="model.type == 'checkbox'" :prop="`answers.${index}.right_variants`" :rules="[vRequiredList]">
              <el-checkbox-group v-model="form.answers[index].right_variants">
                <el-checkbox v-for="(option,chIndex) in model.options" :key="chIndex" :label="option.title"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item v-if="model.type == 'radio'" :prop="`answers.${index}.right_variants`" :rules="[vRequiredRadio]">
              <el-radio-group v-model="form.answers[index].right_variants">
                <el-radio v-for="(option,chIndex) in model.options" :key="chIndex" :label="option.title">{{ option.title }}</el-radio>
              </el-radio-group>
            </el-form-item>
            
          </div>
        </div>
  
      </div>

      <div class="text-end pt-5 partnershipModalBodySubmit">
        <button class="btn btn-first">Submit</button>
      </div>

    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      models: [],
      checkList: [],
      radio: null,
      form:{
        name: "",
        email: "",
        answers: []
      },
    };
  },
  computed: {
  },
  mounted() {
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'testQuestions/list',
      sendTestAnswers: 'partnership/sendTestAnswers',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
        this.form.answers = this.models.map(item => {
          return {
            number: item.number,
            title: item.title,
            type: item.type,
            right_variants: item.type=='checkbox'?[]:null
          }
        })
      })
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.sendTestAnswers(this.form).then(res => {
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