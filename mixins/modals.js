export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show(newVal, oldVal) {
      this.toggleModal(newVal);
    },
    outerVisible(newVal, oldVal) {
      if (!newVal) {
        this.$emit("closed", false);
      }
    },
  },
  data() {
    return {
      outerVisible: false,
      clickClose: 0,
      timeoutClickClose: null,
    };
  },
  created() {
    this.outerVisible = this.show;
  },
  methods: {
    close() {
      this.$emit("closed", true);
    },
    toggleModal(val) {
      this.outerVisible = val;
    },
    handleClose(done) {
      if(this.isMaskClick()){
        if(this.clickClose > 0){
          this.clickClose = 0;
          done()
        }else{
          this.clickClose++;
          this.setTimeoutClickClose()
        }
      }else{
        done()
      }
    },
    isMaskClick(){
      let event = window.event;
      if(event instanceof PointerEvent){
        return event.srcElement.classList.contains('el-dialog__wrapper');
      }
      return false;
    },
    setTimeoutClickClose(){
      this.timeoutClickClose = setTimeout(() => {
        this.clickClose = 0
      },2000);
    },
  },
};
