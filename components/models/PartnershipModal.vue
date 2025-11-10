<template>
  <el-dialog
    :visible.sync="outerVisible"
    width="980px"
    class="headerNone partnershipModal"
    append-to-body>
    
    <div class="partnershipModalTabs">
      <ul>
        <li>
          <a href="#" :class="{'active': tab==1}" @click.prevent="tab=1">For investors</a>
        </li>
        <li>
          <a href="#" :class="{'active': tab==2}" @click.prevent="tab=2">For testers</a>
        </li>
      </ul>
    </div>
    <div v-loading="loadRunning">
      <PartnershipForInvestors v-if="tab==1" />
      <PartnershipForTesters v-if="tab==2" />
    </div>
    
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'
import PartnershipForInvestors from '@/components/elements/PartnershipForInvestors'
import PartnershipForTesters from '@/components/elements/PartnershipForTesters'
export default {
  components: {
    PartnershipForInvestors,
    PartnershipForTesters
  },
  data() {
    return {
      outerVisible: false,
      tab: 1,
    };
  },
  computed: {
    queryModalShow(){
      return !!this.$route.query['partnership'];
    },
    queryTab(){
      return this.$route.query['tab'];
    }
  },
  watch: {
    queryModalShow(val){
      if(this.outerVisible != val){
        this.outerVisible = val;
      }
    },
    outerVisible(val){
      if(!val){
        this.changeQuery('partnership', null);
      }
    }
  },
  mounted() {
    if(this.queryTab){
      this.tab = this.queryTab;
    }
    this.outerVisible = this.queryModalShow;
  },
  methods: {
  },
};
</script>