<template>
  <div>
    <client-only>
      <vue-editor v-if="mode && mode == 'base'" :disabled="disabled" :placeholder="placeholder" :id="editorId" :ref="editorId" :editorToolbar="customToolbar" v-model="content"> </vue-editor>
      <vue-editor v-else :disabled="disabled" 
        :placeholder="placeholder" 
        :id="editorId" 
        :ref="editorId" 
        use-custom-image-handler
        @image-added="handleImageAdded"
        v-model="content"> </vue-editor>
    </client-only>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: {
    editorId: {
      type: [Number, String],
      default: () => 'ediotr-container',
      required: false
    },
    value: {
      type: [String, Number, Object, Array],
      required: true
    },
    mode: { // full, base
      type: String,
      required: false 
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  watch: {
    value(newValue, oldValue) {
      this.content = newValue;
    },
    content(){
      this.elFormItem.validateState = '';
      this.$emit('input', this.content);
    }
  },
  data() {
    return {
      editorContent: 'Initial Content',
      content: null,
      customToolbar: [
        ["bold", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{header: [false, 3]}],
        ["link"]
      ]
    };
  },
  mounted() {
    this.content = this.value;
  },
  updated() {
    this.$emit('input', this.content);
  },
  methods: {
    ...mapActions({
      storeContentImage: 'mediaFiles/storeContentImage',
    }),
    handleImageAdded(file, Editor, cursorLocation) {
      this.storeContentImage({file}).then(res => {
        Editor.insertEmbed(cursorLocation, 'image', res['data']);
      })
    }
  },
};
</script>
<style lang="scss">
.quillWrapper .ql-snow .ql-picker.ql-header .ql-picker-item::before, .quillWrapper .ql-snow .ql-picker.ql-header .ql-picker-label::before{
  content:'Заголовок';
}
.quillWrapper .ql-snow .ql-picker.ql-header{
  width: 115px;
}
.quillWrapper .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{
  display: none;
}
@for $i from 1 through 6 {
  .quillWrapper .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="#{$i}"]::before, .quillWrapper .ql-snow .ql-picker.ql-header .ql-picker-label[data-value="#{$i}"]::before{
    content: 'Заголовок '+$i
  }
}
.quillWrapper{
  line-height: 22px!important;
  .ql-container{
    font-family: 'SF Pro Display';
    h1, h2, h3, h4, h5, h6{
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    p{
      margin-bottom: 0.5rem;
    }
    ol,
    ul{
      padding-left:0;
      margin-bottom: 0.5rem;
    }
  }
  .ql-editor ul>li::before{
    content: "- ";
  }
}
.quillWrapper .ql-editor.ql-blank::before{
  font-style: normal;
}
</style>