<template>
  <div class="marketplaceSection pt-0">
    <div class="marketplace-container">
      <div class="marketplaceSection-head">
        <h3 class="marketplaceSection-title">Categories</h3>
      </div>

      <div class="listTabs">
        <ul>
          <li v-for="(model,index) in models" :key="index">
            <a class="listTabsA" v-if="model.childs && model.childs.length">
              {{ model.title }}
            </a>
            <nuxt-link v-else class="listTabsA" :to="'/products?category_id='+model.id">
              {{ model.title }}
            </nuxt-link>
            <div class="listTabsDropDown" v-if="model.childs && model.childs.length">
              <div class="row">
                <div class="col-md-8">
                  <ul class="listTabsDropDownList">
                    <li v-for="(child,index) in model.childs" :key="index">
                      <nuxt-link :to="'/products?category_id='+child.id">{{ child.title }}</nuxt-link>
                      <ul>
                        <li v-for="(chChild,index) in child.childs" :key="index">
                          <nuxt-link :to="'/products?category_id='+chChild.id">{{chChild.title}}</nuxt-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <div class="listTabsDropDownImg" :style="`background-image: url('${model.image_full}');`"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <ul class="categoriesCells">
        <li v-for="(model,index) in models" :key="index">
          <div class="category-cell">
            <nuxt-link :to="'/products?category_id='+model.id" :style="`background-image: url('${model.image_full}');`">
              <div class="category-cell-title">{{model.title}}</div>
            </nuxt-link>
          </div>
        </li>
      </ul>

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
  mounted(){
    this.getModels();
  },
  methods: {
    ...mapActions({
      getCategories: 'categories/list'
    }),
    getModels(){
      this.getCategories().then(res => {
        this.models = this.getTree(res['data']);
      })
    },
    getTree(list, parent_id) {
      if (list && list.length) {
          if (parent_id) {
              return list.filter(child => child.parent_id == parent_id).map(item => {
                item['childs'] = this.getTree(list, item.id);
                return item
              })
          } else {
              return list.filter(parent => !parent.parent_id).map(item => {
                item['childs'] = this.getTree(list, item.id);
                return item
              })
          }
      }
      return [];
    },
  }
}
</script>
