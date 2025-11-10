<template>
  <div>
    <marmoset-viewer :src="objectpath" width="500px" responsive />
    <!-- <vue-model-viewer :modelAddress="objectpath"
                      viewWidth="100%"
                      viewHeight="500px">
      </vue-model-viewer> -->
  </div>
</template>

<script>
export default {
  components:{
  },
  props: {
    objectpath: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
    };
  },
  mounted() {
    var viewerDisplayId = document.getElementById('viewer-display');
    if(viewerDisplayId){
      viewerDisplayId.removeAttribute('disable-zoom');
      viewerDisplayId.removeAttribute('interpolation-decay');
      viewerDisplayId.removeAttribute('max-camera-orbit');
    }
  },
  updated() {
  },
  methods: {
  },
};
</script>