import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      google:{
        link: 'https://accounts.google.com/o/oauth2/auth/identifier',
        params: {
          scope: 'email profile openid',
          access_type: 'offline',
          response_type: 'code',
          redirect_uri: process.env.VUE_APP_SOCIAL_AUTH_REDIRECT,
          client_id: process.env.VUE_APP_GOOGLE_CLIENT_ID,
          state: "google"
        }
      },
      facebook:{
        link: 'https://www.facebook.com/v2.12/dialog/oauth',
        params: {
          client_id: process.env.VUE_APP_FB_CLIENT_ID,
          response_type: 'code',
          redirect_uri: process.env.VUE_APP_SOCIAL_AUTH_REDIRECT,
          scope: 'email',
          state: "facebook"
        }
      }
    }
  },
  mounted() {
    this.checkCode();
  },
  methods: {
    ...mapActions({
      sociallogin: 'auth/sociallogin', 
      getCurrentUser: 'auth/getCurrentUser',
    }),
    authSocial(social){
      switch (social) {
        case 'google':
          window.location.href = this.toSocial(this.google);
          break;
        case 'facebook':
          window.location.href = this.toSocial(this.facebook);
          break;
      }
    },
    toSocial(socialObject){
      let link = socialObject.link
      let params = this.objectToQueryParams(socialObject.params)
      return `${link}?${params}`;
    },
    objectToQueryParams(params){
      return Object.keys(params).map(key => key + '=' + encodeURIComponent(params[key])).join('&');
    },
    checkCode(){
      if(this.$route.query['code'] && this.$route.query['state']){
        this.sociallogin({provider: this.$route.query['state'], data: this.$route.query}).then(res => {
          this.getCurrentUser(res).then(res => {
            this.toCabinet();
          });
        })
      }
    },
    toCabinet(){
      if(this.isAdmin){
        this.$router.push('/admin');
      }else{
        this.$router.push('/cabinet');
      }
    },
  },
};
