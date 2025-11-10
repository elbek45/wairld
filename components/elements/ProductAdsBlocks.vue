<template>
  <div>
    <div v-for="(item,index) in form.lists" :key="index">
      <ProductAdsBlock :index="index" :item="item" @deleted="deletedItem" />
      <hr class="mt-0">
    </div>
    <button class="btn btn-primary btn-sm" type="button" @click="addItem">Add item</button>
  </div>
</template>

<script>
import ProductAdsBlock from "@/components/elements/ProductAdsBlock"
export default {
  props: ['form'],
  components:{
    ProductAdsBlock,
  },
  data(){
    return {
      formItem: {
        list: "",
        limit_dates: "",
        limit_show: "",
      }
    }
  },
  computed: {
  },
  mounted(){
  },
  methods: {
    addItem(){
      if(this.form.lists){
        this.form.lists.push({...{},...this.formItem});
      }else{
        this.form.lists = [{...{},...this.formItem}];
      }
    },
    deletedItem(index){
      this.form.lists.splice(index, 1);
    }
  }
}
</script>
