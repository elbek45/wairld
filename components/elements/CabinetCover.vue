<template>
  <div class="cabinetCover" :style="`background-image: url(${coverFilePath});`">
    <div class="mainContainer">
      <div class="change-cover">
        <form action="/">
          <label>
            <span class="change-cover-btn">
              <img src="/img/icons/ant-design_camera-filled.svg" alt="">
              <span>Change cover</span>
            </span>
            <input class="change-cover-input" @change="changeCover" type="file" accept=".jpeg, .jpg, .png">
          </label>
        </form>
      </div>
    </div>  
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  components:{
  },
  computed: {
    coverFilePath(){
      if(this.currentProfile && this.currentProfile.cover_full){
        return this.currentProfile.cover_full;
      }
      return '/img/cover.png';
    }
  },
  mounted(){
  },
  methods: {
    ...mapActions({
      update: 'members/updateCover',
      getCurrentUser: 'auth/getCurrentUser'
    }),
    changeCover(fileRow){
      if(fileRow.target && fileRow.target.files.length){
        var file = fileRow.target.files[0];
        this.update(file).then(res => {
          this.getCurrentUser();
        })
      }
    },
  }
}
</script>
