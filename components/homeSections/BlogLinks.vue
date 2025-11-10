<template>
  <div class="homeSection">
    <div class="mainContainer">

      <template v-for="(model,index) in models">
        <div class="linkBlock" :class="{'isOdd':!isEven(index)}" :key="index">
          <!-- <template v-if="isEven(index)"> -->
            <div class="linkBlockImage">
              <img :src="model.file_full_path" alt="">
            </div>
            <div class="linkBlockCont">
              <div class="linkBlockTitle title">{{model.title}}</div>
              <div class="linkBlockTxt">{{model.description}}</div>
              <div class="text-center" v-if="model.link != '#'">
                <a :href="model.link" class="btn btn-first">Read more</a>
              </div>
            </div>
          <!-- </template> -->
  
          <!-- <template v-else>
            <div class="linkBlockCont">
              <div class="linkBlockTitle title">{{model.title}}</div>
              <div class="linkBlockTxt">{{model.description}}</div>
              <div class="text-center" v-if="model.link != '#'">
                <a :href="model.link" class="btn btn-first">Read more</a>
              </div>
            </div>
            <div class="linkBlockImage">
              <img :src="model.file_full_path" alt="">
            </div>
          </template> -->
        </div>
      </template>
      
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      models: []
    }
  },
  computed: {
  },
  mounted(){
    this.getModels();
  },
  methods:{
    ...mapActions({
      list: 'textBlocks/getByKey',
    }),
    getModels(){
      this.list('link_block').then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
<style scoped>
.homeSection{
  padding: 60px 0;
  background: #F1EFF6;
}
.darkTheme .homeSection{
  background: rgb(60, 60, 60) !important;
}
</style>
