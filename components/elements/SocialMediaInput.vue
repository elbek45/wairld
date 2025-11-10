<template>
  <div>
    <ul class="socialMediaList">
      <li v-for="(item,index) in model" :key="index">
        <a :href="item.link" target="_blank">
          <img :src="`/img/icons/social-media-${item.type}.svg`" alt="">
        </a>
      </li>
      <li>
        <el-dropdown trigger="click" @command="selectItem">
          <button class="socialMediaAddBtn" type="button">
            <img src="/img/icons/plus.svg" alt="">
          </button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="facebook">Facebook</el-dropdown-item>
            <el-dropdown-item command="linkedin">LinkedIn</el-dropdown-item>
            <el-dropdown-item command="instagram">Instagram</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
    <AddSocialMediaUrlModal 
      v-if="showAddUrlModal"
      :show="showAddUrlModal"
      @closed="showAddUrlModal=false"
      @submited="added" />
  </div>
</template>

<script>
import AddSocialMediaUrlModal from '@/components/models/AddSocialMediaUrlModal'
export default {
  components: {
    AddSocialMediaUrlModal
  },
  props: {
    value: {
      type: [String, Number, Object, Array],
      required: true
    },
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data() {
    return {
      model: [],
      showAddUrlModal: false,
      selectedSocial: null
    };
  },
  watch:{
    value(val, oldVal){
      if(val && val.length && (!oldVal || !oldVal.length)){
        this.model = val;
      }
    }
  },
  mounted() {
    if(this.value){
      this.model = this.value;
    }
  },
  updated() {
    this.$emit('input', this.model);
  },
  methods: {
    selectItem(selected){
      this.selectedSocial = selected;
      this.showAddUrlModal = true;
    },
    added(link){
      if(this.model){
        this.model.push({
          link,
          type: this.selectedSocial
        });
      }else{
        this.model = [{
          link,
          type: this.selectedSocial
        }];
      }
      this.showAddUrlModal = false;
      this.$emit('input', this.model);
    }
  },
};
</script>
<style lang="scss">
</style>