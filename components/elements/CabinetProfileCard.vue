<template>
  <div class="cabinetProfileCard c-card" v-loading="loadRunning">
    <div v-if="currentProfile">
      <div class="cabinetProfileCardHead">
        <div class="cabinetProfilePhoto">
          <div class="cabinetProfilePhotoImage" v-if="currentProfile.photo_full" :style="`background-image: url(${currentProfile.photo_full});`"></div>
          <div class="cabinetProfilePhotoImage" v-else style="background-image: url('/img/default-photo.jpg');"></div>
          <div class="cabinetProfilePhotoBtn">
            <label>
              <img src="/img/icons/ant-design_camera-filled.svg" alt="">
              <input type="file" accept=".jpeg, .jpg, .png" @change="changePhoto" />
            </label>
          </div>
        </div>
        <div class="cabinetProfileFullname">{{currentProfile.full_name}}</div>
      </div>
      <ul class="indicatorsList">
        <li>
          <div class="indicatorLabel">NFT sold</div>
          <div class="indicatorValue">12</div>
        </li>
        <li>
          <div class="indicatorLabel">NFT Bought</div>
          <div class="indicatorValue">22</div>
        </li>
        <li>
          <div class="indicatorLabel">NFT Created</div>
          <div class="indicatorValue">1</div>
        </li>
        <li>
          <div class="indicatorLabel">Active bids</div>
          <div class="indicatorValue">0</div>
        </li>
        <li>
          <div class="indicatorLabel">Friends</div>
          <div class="indicatorValue">
            <div class="friends-list">
              <div class="friend-item" style="background-image: url('/img/f1.png');"></div>
              <div class="friend-item" style="background-image: url('/img/f2.png');"></div>
              <div class="friend-item" style="background-image: url('/img/f3.png');"></div>
              <div class="friend-item" style="background-image: url('/img/f4.png');"></div>
              <div class="friend-item more">+15</div>
            </div>
          </div>
        </li>
      </ul>
      <div class="profileRegDate">
        <span>Registration date</span>
        <span>{{currentProfile.created_at|date('DD.MM.YYYY')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  data(){
    return {
    }
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    ...mapActions({
      update: 'members/updatePhoto',
      getCurrentUser: 'auth/getCurrentUser'
    }),
    changePhoto(fileRow){
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
