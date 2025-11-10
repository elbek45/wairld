<template>
  <div id="cabinet">
    <CabinetCover />

    <div class="mainContainer">
      <div class="cabinetRow">
        <div class="cabinetCol1">
          <CabinetProfileCard />
        </div>
        <div class="cabinetCol2">
          <ProfileEditCard />
        </div>
      </div>

      <div class="cardCells c-card">
        <div class="cardCell">
          <div class="cardCell-title">want to be the first to try the game?</div>
          <div class="cardCell-txt">Then feel free to sign up for testing</div>
          <button class="btn btn-second" @click.prevent="changeQueries({'partnership':'1', 'tab': '2'})">Become a tester</button>
        </div>
        <div class="cardCell">
          <div class="cardCell-title">Projects Ideas Interests?</div>
          <div class="cardCell-txt">Get in touch with us to make all your wishes come true</div>
          <a href="mailto:info@wairld.com" class="btn btn-second">Contact</a>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
import CabinetCover from '@/components/elements/CabinetCover'
import ProfileEditCard from '@/components/elements/ProfileEditCard'
import CabinetProfileCard from '@/components/elements/CabinetProfileCard'
export default {
  middleware: ['auth'],
  components:{
    CabinetCover,
    ProfileEditCard,
    CabinetProfileCard
  },
  computed: {
  },
  mounted(){
  },
  methods: {
  }
}
</script>
<style>
#cabinet{
  padding: 114px 0 0;
}
</style>
