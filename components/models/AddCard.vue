<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="500px"
    class="headerNone"
    append-to-body
    :before-close="handleClose">
    
    <div v-loading="loadRunning">

      <h4 class="fs18 mb-4">Karta qo'shish</h4>
      
      <el-form v-if="step == 1" ref="formCard" class="form-type" :model="formCard" label-position="top" @submit.prevent.native="submitCard">
  
        <el-form-item prop="card_number" :rules="[vRequired]">
          <v-input label="Karta raqami" mask="################" v-model="formCard.card_number" />
        </el-form-item>
  
        <el-form-item prop="card_expire" :rules="[vRequired]">
          <v-input label="Amal qilish muddati" mask="##/##" v-model="formCard.card_expire" />
        </el-form-item>
  
        <div class="mt-3 text-center">
          <button class="btn btn-primary btn-large" type="submit">Davom etish</button>
        </div>
        
      </el-form>
  
      <el-form v-if="step == 2" ref="formCode" class="form-type" :model="formCode" label-position="top" @submit.prevent.native="submitCode">
  
        <el-form-item prop="code" :rules="[vRequired]">
          <v-input label="Tasdiqlash kodi" v-model="formCode.code" />
        </el-form-item>
  
        <div class="mt-3 text-center">
          <button class="btn btn-primary btn-large" type="submit">Tasdiqlash</button>
        </div>
  
      </el-form>

    </div>
    
  </el-dialog>
</template>

<script>
import modals from "@/mixins/modals";
import { mapActions } from 'vuex'
export default {
  mixins: [modals],
  data() {
    return {
      formCard:{
        card_number: "",
        card_expire: "",
      },
      formCode: {
        code: "",
        card_id: "",
      },
      step: 1
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
    ...mapActions({
      addCard: 'customers/addCard',
      cardVerify: 'customers/cardVerify'
    }),
    submitCard(){
      this.$refs['formCard'].validate((valid) => {
        if (valid) {
          this.addCard(this.formCard).then(res => {
            this.formCode.card_id = res['data'];
            this.step = 2;
            this.$nextTick(_ => {
              this.$refs['formCode'].resetFields();
            })
          })
        }
      })
    },
    submitCode(){
      this.$refs['formCode'].validate((valid) => {
        if (valid) {
          this.cardVerify(this.formCode).then(res => {
            this.$emit('added', res);
          })
        }
      })
    }
  },
};
</script>