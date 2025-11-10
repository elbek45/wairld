<template>
  <div class="admin-minContainer">
    <p>
      <nuxt-link to="/admin/products">Back</nuxt-link>
    </p>
    <div class="table-head">
      <h1 class="pageTitle20">Products</h1>
    </div>

    <el-form v-if="(paramId && form.id) || !paramId" ref="form" class="form-type" :model="form" label-position="top" @submit.prevent.native="submit">

      <el-form-item label="Image" prop="image_file" :rules="paramId?[]:[vRequired]">
        <UploadBox v-model="form.image_file" :oldimg="form.image_full" />
      </el-form-item>

      <el-form-item label="3d object" prop="object3d_file" :rules="[]">
        <UploadFile v-model="form.object3d_file" accept=".mview" />
      </el-form-item>

      <el-form-item label="Title" prop="title" :rules="[vRequired]">
        <el-input v-model="form.title" />
      </el-form-item>

      <el-form-item label="Categories" prop="category_id" :rules="[vRequired]">
        <el-select v-model="form.category_id" multiple>
          <el-option v-for="(item,index) in categories" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Brands" prop="brand_id" :rules="[]">
        <el-select v-model="form.brand_id" multiple>
          <el-option v-for="(item,index) in brands" :key="index" :label="item.title" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="SWC price" prop="swc_price" :rules="[vRequired]">
        <el-input v-model="form.swc_price" type="number" />
      </el-form-item>

      <el-form-item label="Description" prop="description" :rules="[vRequired]">
        <Editor v-model="form.description" />
      </el-form-item>

      <el-form-item label="Tags" prop="tags" :rules="[]">
        <el-select
          v-model="form.tags"
          multiple
          filterable
          allow-create
          default-first-option
          placeholder="Choose tags">
        </el-select>
      </el-form-item>

      <el-form-item label="Total count" prop="total_count" :rules="[vRequired]">
        <el-input v-model="form.total_count" type="number" />
      </el-form-item>

      <el-form-item label="Color" prop="color" :rules="[]">
        <el-color-picker v-model="form.color"></el-color-picker>
      </el-form-item>

      <!-- <el-form-item label="Lists" prop="lists" :rules="[]">
        <el-select v-model="form.lists" multiple>
          <el-option v-for="(item,index) in lists" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item> -->

      <el-form-item label="Type" prop="type" :rules="[]">
        <el-input v-model="form.type" />
      </el-form-item>

      <el-form-item label="Damage bonus" prop="damage_bonus" :rules="[]">
        <el-input v-model="form.damage_bonus" type="number" />
      </el-form-item>

      <el-form-item label="Creator" prop="creator_id" :rules="[]">
        <el-select v-model="form.creator_id">
          <el-option label="Second World Game" :value="0"></el-option>
          <el-option v-for="(item,index) in members" :key="index" :label="item.full_name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>

      <div class="mb-4">
        <div class="fs16 mb-2"><b>Ads blocks</b></div>
        <ProductAdsBlocks :form="form" />
      </div>

      <div class="enterFormSubmit">
        <button class="btn btn-primary btn-large w-100" type="submit" v-loading="loadRunning">Submit</button>
      </div>

    </el-form>
    
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import Editor from '@/components/elements/Editor'
import UploadBox from "@/components/elements/UploadBox"
import UploadFile from "@/components/elements/UploadFile"
import ProductAdsBlocks from "@/components/elements/ProductAdsBlocks"
export default {
  components:{
    Editor,
    UploadBox,
    UploadFile,
    ProductAdsBlocks
  },
  data(){
    return {
      form: {
        image_file: null,
        title: null,
        category_id: [],
        brand_id: [],
        swc_price: null,
        last_price: null,
        description: "",
        properties: [],
        tags: [],
        lists: [],
        total_count: null,
        sold_count: null,
        color: null,
        type: null,
        damage_bonus: 0,
        creator_id: 0,
        object3d_file: null
      },
      categories: [],
      brands: [],
      members: [],
    }
  },
  computed: {
    paramId(){
      return this.$route.params['id'];
    },
    lists(){
      return [
        "discount",
        "trending",
      ]
    }
  },
  mounted(){
    this.getModel();
    this.getMembers();
    this.getCategories();
    this.getBrands();
  },
  methods: {
    ...mapActions({
      brandsList: 'brands/list',
      categoriesList: 'categories/list',
      show: 'products/show',
      create: 'products/create',
      update: 'products/update',
      shortList: 'members/shortList',
    }),
    getMembers(){
      this.shortList().then(res => {
        this.members = res['data'];
      })
    },
    getCategories(){
      this.categoriesList().then(res => {
        this.categories = res['data'];
      })
    },
    getBrands(){
      this.brandsList().then(res => {
        this.brands = res['data'];
      })
    },
    submit(){
      this.$refs['form'].validate((valid) => {
        if (valid) {
          if(this.paramId){
            this.form['id'] = this.paramId;
            this.update(this.form).then(res => {
              this.$router.push('/admin/products')
            })
          }else{
            this.create(this.form).then(res => {
              this.$router.push('/admin/products')
            })
          }
        }
      })
    },
    getModel(){
      if(this.paramId){
        this.show(this.paramId).then(res => {
          this.form = {...this.form, ...res['data']}
          console.log(this.form);
        })
      }
    }
  }
}
</script>
