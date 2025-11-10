<template>
  <el-input 
    class="v-input" 
    v-mask="'+998 (##) ### ## ##'"
    key="phone"
    type="tel"
    :placeholder="placeholder"
    v-model="model" 
    @focus="focused=true" 
    @blur="focused=false" 
    :class="{'fulled': (model||focused)}">
    <template slot="suffix" v-if="label">{{label}}</template>
  </el-input>
</template>

<script>

export default {
  props:{
    label: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
  },
  data(){
    return {
      focused: false,
      model: ''
    }
  },
  watch: {
    model(value){
      if (value && value.length) {
        this.$emit('input', '+'+String(value).replace(/\D/g, ''));
      } else {
        this.$emit('input', '');
      }
    }
  },
  mounted(){
    this.model = this.value?this.value:"";
  },
  computed: {}
}
</script>
