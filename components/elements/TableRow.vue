<template>
  <div>
    <div class="table-row">
      <div class="table-cell">
        <div>{{index+1}}</div>
        <div>{{item.title}}</div>
      </div>
      <div class="table-cell">
        <div v-if="secondcolumn == 'updated_at'">{{item.updated_at|date('DD.MM.YYYY')}}</div>
        <div v-else-if="secondcolumn == 'image_full'">
          <img :src="item.image_full" width="100px" alt="">
        </div>
        <div>
          <button v-if="isEditModal" class="btn btn-sm btn-primary" @click="editModel(item)">Edit</button>
          <nuxt-link v-else class="btn btn-sm btn-primary" :to="`${$route.path}/update/${item.id}`">Edit</nuxt-link>
          <button class="btn btn-sm btn-danger" @click="deleteModel(item.id)">Delete</button>
        </div>
      </div>
    </div>
    <div class="ps-4" v-if="item.children && item.children.length > 0">
      <TableRow v-for="(child,index) in item.children" 
        :key="index" 
        :item="child" 
        :index="index" 
        @deleteModel="deleteModel" 
        @editModel="editModel"
        :isEditModal="isEditModal"
        :secondcolumn="secondcolumn" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    index: Number,
    item: Object,
    secondcolumn: {
      type: String,
      default: () => 'updated_at'
    },
    isEditModal: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
    deleteModel(id){
      this.$emit('deleteModel',id);
    },
    editModel(item){
      this.$emit('editModel',item);
    }
  }
};
</script>
