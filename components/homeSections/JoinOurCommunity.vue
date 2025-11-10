<template>
  <div class="homeSection joinOurCommunity" style="background-image: url('/img/Office_1.png');">
    <div class="mainContainer">
      <h3 class="title title-36 text-center">Присоединяйтесь к Нейровселенной</h3>
      <div class="joinOurCommunityTxt">Следите за нами в социальных сетях и подписывайтесь на рассылку. Будьте первыми, кто узнает о новостях, обновлениях AI-агентов, релизах NFI и получите шанс стать бета-тестером Wairld.</div>
      <!-- <a href="#" class="btn btn-outline">Get started</a> -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  computed: {
  },
  mounted(){
  },
  methods:{
  }
}
</script>
<style scoped>
.title-36{
  margin-bottom: 53px;
  color: #fff;
}
.homeSection{
  padding: 118px 0 106px;
}
.mainContainer{
  position: relative;
}
@media screen and (max-width: 700px) {
  .title-36{
    margin-bottom: 20px;
  }
  .homeSection{
    padding: 50px 0 50px;
  }
}
</style>
