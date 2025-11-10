<template>
  <div class="inner-container" v-loading="loadRunning">
    <div class="whitepaper-container">
      <div class="whitepaper-sidebar">
        <div class="whitepaper-sidebar-inner">
          <div class="whitepaper-sidebar-head">
            <div class="w-sidebar-title">Wiki</div>
            <div class="w-sidebar-searchForm">
              <el-input placeholder="Search" v-model="searchField" prefix-icon="icon-search" />
            </div>
          </div>
          <div class="whitepaper-sidebar-body scrollBar">
            <nav class="whitepaper-sidebar-nav" v-if="navItems && navItems.length">
              <ul>
                <TreeItem v-for="(item,index) in navItems" :key="index" :item="item" :openedItems="openedItems"/>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="whitepaper-content">
        <div class="whitepaper-content-min" v-if="model">
          <div class="whitepaper-content-head">
            <h1 class="whitepaper-content-title">{{model.title}}</h1>
          </div>
          <div class="whitepaper-content-txt" v-html="model.content"></div>
          <div class="whitepaper-nagivation">
            <button v-if="prevItem" @click.prevent="toNavigate(prevItem.id)">
              <div class="whitepaper-nagivation-ico">
                <i class="icon-arrow-prev"></i>
                <span>Previous</span>
              </div>
              <div class="whitepaper-nagivation-title">{{prevItem.title}}</div>
            </button>
            <button v-if="nextItem" @click.prevent="toNavigate(nextItem.id)">
              <div class="whitepaper-nagivation-title">{{nextItem.title}}</div>
              <div class="whitepaper-nagivation-ico">
                <span>next</span>
                <i class="icon-arrow-next"></i>
              </div>
            </button>
          </div>
          <div class="whitepaper-footer">
            <div class="whitepaper-updated">Last modified {{model.updated_at|date('DD.MM.YYYY')}}</div>
            <div class="whitepaper-reactions">
              <button style="background-image: url('/img/icons/emodjy_angry.svg');"></button>
              <button style="background-image: url('/img/icons/emodjy_normal.svg');"></button>
              <button style="background-image: url('/img/icons/emodjy_smile.svg');"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import TreeItem from '@/components/elements/TreeItem'
export default {
  layout: 'default2',
  components:{
    TreeItem
  },
  data(){
    return {
      models: [],
      navItems: [],
      openedItems: [],
      navIds: [],
      searchField: ""
    }
  },
  computed: {
    navbar(){
      return this.getTree(this.models, null);
    },
    modelId(){
      return this.$route.query['id'];
    },
    model(){
      if(this.models.length){
        if(this.modelId){
          return this.models.find(item => item.id == this.modelId);
        }
        return this.models[0];
      }
      return null;
    },
    nextItem(){
      var nextItemId = null;
      if(this.modelId){
        var currentIndex = this.navIds.indexOf(Number(this.modelId));
        nextItemId = this.navIds[currentIndex+1];
      }else{
        nextItemId = this.navIds[1];
      }
      if(nextItemId){
        return this.models.find(item => item.id == nextItemId);
      }
      return null;
    },
    prevItem(){
      var prevItemId = null;
      if(this.modelId){
        var currentIndex = this.navIds.indexOf(Number(this.modelId));
        prevItemId = this.navIds[currentIndex-1];
        if(prevItemId){
          return this.models.find(item => item.id == prevItemId);
        }
      }
      return null;
    }
  },
  watch:{
    modelId(){
      this.openedItems = this.getActiveItems(this.modelId);
      window.scrollTo( 0, 0 );
    },
    searchField(val){
      this.searchAction(val);
    }
  },
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      list: 'wiki/list',
    }),
    getModels(){
      this.list().then(res => {
        this.models = res['data'];
        this.getNavItems();
        this.openedItems = this.getActiveItems(this.modelId);
      })
    },
    getNavItems(){
      this.navItems = this.getTree(this.models, null);
      if(!this.modelId && this.navItems.length){
        this.changeQuery('id',this.navItems[0].id);
      }
    },
    getActiveItems(modelId){
      var arr = [];
      if(modelId){
        arr.push(Number(modelId));
        var model = this.models.find(item => item.id == modelId);
        if(model && model.parent_id){
          return arr.concat(this.getActiveItems(model.parent_id));
        }
      }
      return arr;
    },
    getTree(list, parent_id) {
      if (list && list.length) {
          if (parent_id) {
              return list.filter(child => child.parent_id == parent_id).map(item => {
                  this.navIds.push(item.id);
                  return {
                      id: item.id,
                      title: item.title,
                      childrens: this.getTree(list, item.id),
                  }
              })
          } else {
              return list.filter(parent => !parent.parent_id).map(item => {
                  this.navIds.push(item.id);
                  return {
                      id: item.id,
                      title: item.title,
                      childrens: this.getTree(list, item.id),
                  }
              })
          }
      }
      return [];
    },
    toNavigate(id){
      this.changeQuery('id',id);
    },
    searchAction(text){
      if(text){
        this.navItems = this.getTree(this.models.filter(item => {
          return String(item.title).toLowerCase().search(text.toLowerCase()) >= 0 || String(item.content).toLowerCase().search(text.toLowerCase()) >= 0;
        }), null);
      }else{
        this.navItems = this.getTree(this.models, null);
      }
    }
  }
}
</script>
