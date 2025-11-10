<template>
  <div class="footerMinSN">
    <table class="w-100">
      <tr>
        <td><img src="/img/icons/sn/icon-artstation.svg" alt=""></td>
        <td>
          <el-input v-model="form.artstation" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-facebook.svg" alt=""></td>
        <td>
          <el-input v-model="form.facebook" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-instagram.svg" alt=""></td>
        <td>
          <el-input v-model="form.instagram" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-linkedin.svg" alt=""></td>
        <td>
          <el-input v-model="form.linkedin" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-twitter.svg" alt=""></td>
        <td>
          <el-input v-model="form.twitter" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-discord.svg" alt=""></td>
        <td>
          <el-input v-model="form.discord" />
        </td>
      </tr>
      <tr>
        <td><img src="/img/icons/sn/icon-telegram.svg" alt=""></td>
        <td>
          <el-input v-model="form.telegram" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  props:["value"],
  data(){
    return {
      form: {
        artstation: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        twitter: "",
        discord: "",
      }
    }
  },
  watch: {
    form: {
      handler(val, oldVal){
        this.$emit('input', val);
      },
      deep: true
    }
  },
  mounted(){
    if(this.value){
      this.form = {...this.form,...this.value};
    }
  },
  computed: {}
}
</script>
<style scoped>
.footerMinSN a{
  margin: 0 5px 5px 0;
}
</style>
