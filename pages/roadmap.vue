<template>
  <div class="roadmap-page" v-loading="loadRunning">
    <div class="roadmap-container">
      <div class="roadmap-head">
        <div class="roadmap-logo">
          <img src="/img/large-logo.svg" alt="">
        </div>
        <div class="roadmap-head-title">Development Roadmap</div>
        <div class="roadmap-head-txt">The roadmap represents the major milestones to expect until release. Each milestone has list of key futures we aim to deliver as we promised to our fans. The lists are not exclusive to these features and other smaller features will be included. Thank you for your continuous support.</div>
      </div>

      <div class="roadmap-stages-row">
        <div class="roadmap-stages" v-if="models && models.length">
          
          <div class="roadmap-stage" v-for="(model,index) in models" :key="index">
            <div class="roadmap-stage-head">
              <div class="roadmap-stage-title">{{model.title}}</div>
              <div class="roadmap-stage-state done" v-if="model.state == 2">Done</div>
              <div class="roadmap-stage-state current" v-if="model.state == 1">We are here</div>
              <div class="roadmap-stage-state" v-if="model.state == 3">Featured</div>
            </div>
            <div class="roadmap-stage-body">
              <div class="roadmap-stage-month">{{model.period}}</div>
              <div class="roadmap-stage-list" v-html="model.content"></div>
            </div>
          </div>

        </div>
        <div class="roadmap-stages-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="61" viewBox="0 0 17 61" fill="none">
            <path d="M7.63398 15.5C8.01888 16.1667 8.98112 16.1667 9.36602 15.5L14.9952 5.75C15.3801 5.08333 14.899 4.25 14.1292 4.25H2.87083C2.10103 4.25 1.61991 5.08333 2.00481 5.75L7.63398 15.5Z" fill="#D9D9D9"/>
            <path d="M7.63398 37.5C8.01888 38.1667 8.98112 38.1667 9.36602 37.5L14.9952 27.75C15.3801 27.0833 14.899 26.25 14.1292 26.25H2.87083C2.10103 26.25 1.61991 27.0833 2.00481 27.75L7.63398 37.5Z" fill="#D9D9D9"/>
            <path d="M7.63398 59.5C8.01888 60.1667 8.98112 60.1667 9.36602 59.5L14.9952 49.75C15.3801 49.0833 14.899 48.25 14.1292 48.25H2.87083C2.10103 48.25 1.61991 49.0833 2.00481 49.75L7.63398 59.5Z" fill="#D9D9D9"/>
          </svg>
        </div>
        <div class="roadmap-stages-robot">
          <div class="roadmap-stages-robot-elem"></div>
          <!-- <img src="/img/robot/1.png" alt="">
          <img src="/img/robot/2.png" alt="">
          <img src="/img/robot/3.png" alt="">
          <img src="/img/robot/4.png" alt="">
          <img src="/img/robot/5.png" alt="">
          <img src="/img/robot/6.png" alt="">
          <img src="/img/robot/7.png" alt="">
          <img src="/img/robot/8.png" alt=""> -->
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  layout: 'default2',
  components:{
  },
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
  methods: {
    ...mapActions({
      list: 'roadmap/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
      })
    },
  }
}
</script>
