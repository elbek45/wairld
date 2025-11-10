<template>
  <li :class="{'opened': isActive}">
    <a :class="{'isActive': isActive}" :href="item.id" @click.prevent="changeQuery('id',item.id)">
      {{item.title}} <i v-if="item.childrens.length" class="icon-arrow-sm-right"></i>
    </a>
    <ul v-if="item.childrens && item.childrens.length">
      <TreeItem :key="index" v-for="(child, index) in item.childrens" :item="child" :openedItems="openedItems" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object,
    openedItems: Array
  },
  computed: {
    modelId(){
      return this.$route.query['id'];
    },
    isActive(){
      if(this.openedItems && this.openedItems.length){
        return this.openedItems.indexOf(this.item.id) >= 0;
      }
      return false
    }
  },
  created() {
  },
  methods: {
  }
};
</script>
