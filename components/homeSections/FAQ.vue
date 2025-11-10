<template>
  <div class="homeSection">
    <div class="mainContainer">
      <div class="faqSectionHead">
        <h3 class="title title-36">Frequently Asked Questions</h3>
        <div class="faqSectionTxt">Найдите самую полезную информацию о Wairld в вопросах и ответах ниже. Если не нашли ответ, посетите наш wiki или спросите в социальных сетях</div>
      </div>
      <div class="faqAccordion">
        <el-collapse accordion>
          <el-collapse-item v-for="(model,index) in models" :key="index" :name="index+1">
            <template slot="title">
              <div class="faqAccordionNumber">{{ (index+1)|cNumber }}</div>
              <div class="faqAccordionTitle">{{ model.title }}</div>
            </template>
            <div class="faqAccordionBody" v-html="model.description"></div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
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
      this.list('faq').then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
<style scoped>
.title-36{
  margin-bottom: 25px;
}
.homeSection{
  padding: 89px 0;
}
</style>
