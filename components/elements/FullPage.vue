<template>
  <div class="fullPageWrap" ref="fullPage">
    <div class="fullPageInner">
      <div class="fullPageSlider" ref="fullPageSlider">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      pageOffsetTop: 0,
      scrollDirection: 'down',
      childs: [],
      currentSlideIndex: -1,
      firstSection: true,
      setTimeout: null,
      onScroll: false,
      scrollTop: 0
    }
  },
  mounted(){
    this.renderChilds();
    this.scrollListener();
  },
  watch:{
  },
  computed: {},
  methods:{
    scrollListener(){
      document.addEventListener("wheel", (event) => {
        var _scrollY = window.scrollY;
        var _innerHeight = window.innerHeight;
        clearTimeout(this.setTimeout);
        this.setTimeout = setTimeout(() => {
          if(event.deltaY > 0){
            for (var i = 0; i < this.childs.length; i++) {
              var child = this.childs[i];
              var offsetTop = child.offsetTop-document.documentElement.scrollTop;
              if(offsetTop > 0 && offsetTop < (_innerHeight-10)){
                console.log(child.offsetTop);
                window.scrollTo(0, child.offsetTop);
              }
              // else{
              //   var _height = (child.offsetTop + _innerHeight)-document.documentElement.scrollTop;
              //   if(_height > (_innerHeight/2) && _height < (_innerHeight)){
              //     window.scrollTo(0, child.offsetTop);
              //   }
              // }
            }
          }else{
            for (var i = 0; i < this.childs.length; i++) {
              var child = this.childs[i];
              var offsetTop = (child.offsetTop+child.offsetHeight)-document.documentElement.scrollTop;
              if(offsetTop > 0 && offsetTop < (_innerHeight-10)){
                window.scrollTo(0, (child.offsetTop+child.offsetHeight)-_innerHeight);
              }
            }
          }
        },150)
      });

      document.addEventListener("scroll", (event) => {
        this.scrollTop = window.scrollY;
        // event.preventDefault();
        // clearTimeout(this.setTimeout);
        // this.setTimeout = setTimeout(() => {
        //   if(window.scrollY > this.oldScrollTop){
        //     for (var i = 0; i < this.childs.length; i++) {
        //       var child = this.childs[i];
        //       var offsetTop = child.offsetTop-window.scrollY;
        //       if(offsetTop > 0 && offsetTop < (window.innerHeight-100)){
        //         window.scrollTo(0, child.offsetTop);
        //       }
        //       // else{
        //       //   var _height = (child.offsetTop + window.innerHeight)-window.scrollY;
        //       //   if(_height > (window.innerHeight/2) && _height < (window.innerHeight)){
        //       //     window.scrollTo(0, child.offsetTop);
        //       //   }
        //       // }
        //     }
        //   }else{

        //   }
        //   this.oldScrollTop = window.scrollY
        // },100)
        // return false;
      });

      // document.addEventListener("scrollend", (event) => {
      //   this.onScroll = false;
      // });
    },
    detectScrollDirection(st){
      if (st > 0) {
        this.scrollDirection = 'down';
      } else {
        this.scrollDirection = 'up';
      }
    },
    toNextSlide(){
      var nextSlide = this.getNextSlide();
      if(nextSlide){
        window.scroll(0, nextSlide.offsetTop);
      }else{
        window.scrollTo({
          top: window.scrollY+window.innerHeight,
          left: 0,
          behavior: "smooth",
        });
      }
      // this.currentSlideIndex++;
      // clearTimeout(this.setTimeout);
      // if(this.childs[this.currentSlideIndex+1]){
      //   this.setTimeout = setTimeout(() => {
      //     window.scroll(0, this.childs[this.currentSlideIndex].offsetTop);
      //   },100)
      // }else{
      //   window.scrollTo({
      //     top: window.scrollY+window.innerHeight,
      //     left: 0,
      //     behavior: "smooth",
      //   });
      // }
    },
    toPrevSlide(){
      var prevSlide = this.getPrevSlide();
      if(prevSlide){
        window.scroll(0, prevSlide.offsetTop);
      }else{
        window.scrollTo({
          top: window.scrollY-window.innerHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    },
    getNextSlide(){
      var slide = null;
      for (var i = 0; i < this.childs.length; i++) {
        var child = this.childs[i];
        if(child){
          var showedPercent = this.getSlideShowPercent(child);
          console.log(showedPercent, child);
          // if(showedPercent.percent){

          // }
          if(showedPercent.percent < 95 && showedPercent.percent > 0){
            slide = this.childs[i];
          }else if(showedPercent.percent > 95 && showedPercent.percent < 150){
            slide = this.childs[i+1];
          }
        }
      }
      return slide;
    },
    getPrevSlide(){
      var slide = null;
      for (var i = 0; i < this.childs.length; i++) {
        var child = this.childs[i];
        if(child){
          var showedPercent = this.getSlideShowPercent(child);
          if(showedPercent < 95 && showedPercent > 0){
            slide = this.childs[i];
          }else if(showedPercent > 95 && showedPercent < 150){
            slide = this.childs[i-1];
          }
        }
      }
      return slide;
    },
    getSlideShowPercent(slide){
      var percent = 0;
      if(!(slide.offsetTop > (window.scrollY+window.innerHeight) || (slide.offsetTop+window.innerHeight) < window.scrollY)){
        var slideShowed = (slide.offsetTop+window.innerHeight)-window.scrollY;
        if(slideShowed){
          console.log(slideShowed);
          let result = ((slideShowed / window.innerHeight) * 100)
          percent = Math.floor(Math.round(result * 100) / 100)
        }
      }
      var _top = slide.offsetTop-window.scrollY
      if(_top >= 0){
        return {
          percent,
          direction: 'bottom'
        }
      }else{
        return {
          percent,
          direction: 'top'
        }
      }
      
      
      // var slideShowed = (slide.offsetTop+window.innerHeight)-document.scrollY;
      // if(slideShowed){
      //   let result = ((slideShowed / window.innerHeight) * 100)
      //   return Math.floor(Math.round(result * 100) / 100)
      // }
      // return 0;
    },
    showSlide(){
      // var slide;
      // if(this.scrollDirection == 'down'){
      //   slide = this.getNextSlide();
      // }else{
      //   slide = this.getPrevSlide();
      // }
      // console.log(slide.scrollTop)
      // if(slide){
      //   this.scrollTop = slide.scrollTop;
      // }else{
      //   this.scrollTop = 0;
      // }
    },
    // getNextSlide(){
    //   if(this.currentSlideIndex === null){
    //     return this.childs[0];
    //   }
    //   return this.childs[this.currentSlideIndex+1];
    // },
    // getPrevSlide(){
    //   if(this.currentSlideIndex > 0){
    //     return this.childs[this.currentSlideIndex-1];
    //   }
    //   return null;
    // },
    renderChilds(){
      if(this.$refs['fullPageSlider'] && this.$refs['fullPageSlider'].children){
        this.childs = this.$refs['fullPageSlider'].children;
        for (const child of this.$refs['fullPageSlider'].children) {
          child.classList.add("fullPage-item");
        }
        // this.$refs['fullPage'].style.height = String(this.$refs['fullPageSlider'].children.length*100)+'vh';
      }
      // this.pageOffsetTop = this.$refs['fullPage'].offsetTop;
      // document.body.classList.add("hidden");
    }
  }
}
</script>
<style>
/* .fullPageWrap{
  scroll-snap-type: y mandatory;
}
.fullPage-item {
  scroll-snap-align: start;
} */

/* .fullPage-item{
  height: 100vh;
  overflow-y: auto;
} */
/* .fullPageWrap{
  position: relative;
}
.fullPageInner{
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}
.fullPageSlider{
  transition: all 0.2s;
} */
</style>
