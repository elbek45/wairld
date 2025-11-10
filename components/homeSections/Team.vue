<template>
  <div class="homeSection">
    <div class="mainContainer">
      <h3 class="title title-36 text-center">Our team</h3>
      <ul class="teamMembers" v-if="models.length">
        <li v-for="(model,index) in models" :key="index">
          <div class="teamMember" :class="{'teamMemberFull':!!model.description}">
            <div class="teamMemberHead">
              <div class="teamMemberPhoto" v-if="model.photo_full" :style="`background-image: url(${model.photo_full});`"></div>
              <div class="teamMemberHeadRight">
                <div class="teamMemberInfo">
                  <div class="teamMemberFullname title">{{model.full_name}}</div>
                  <div class="teamMemberPosition">{{model.position}}</div>
                </div>
              </div>
            </div>
            <div class="teamMemberTxt" v-if="model.description" v-html="model.description"></div>
            <div class="teamMemberSN" v-if="model.social_networks">
              <template v-for="(key,index) in snKeys">
                <a v-if="model.social_networks[key]" :key="index" :href="model.social_networks[key]|link" target="_blank">
                  <img :src="`/img/icons/sn/icon-${key}.svg`" alt="">
                </a>
              </template>
            </div>
          </div>
        </li>
      </ul>
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
      list: 'team/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
<style scoped>
.title-36{
  margin-bottom: 56px;
}
.homeSection{
  padding: 90px 0 90px;
}
@media screen and (max-width: 800px) {
  .title-36{
    margin-bottom: 30px;
  }
  .homeSection{
    padding: 50px 0 50px;
  }
}
</style>
