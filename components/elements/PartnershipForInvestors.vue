<template>
  <div class="partnershipModalBody">
    <div class="row justify-content-between">
      <div class="col-md-4">
        <div class="partnershipModalTitle">Projects Ideas Interests?</div>
        <div class="partnershipModalTxt">Get in touch with us to make all your wishes come true</div>
        <div class="footerMinSN">
          <!-- <a href="#">
            <img src="/img/icons/sn/artstation2.svg" alt="">
          </a> -->
          <!-- <a href="#">
            <img src="/img/icons/sn/discord2.svg" alt="">
          </a> -->
          <a href="https://instagram.com/wairld.official" target="_blank">
            <img src="/img/icons/sn/instagram2.svg" alt="">
          </a>
          <!-- <a href="#">
            <img src="/img/icons/sn/linkedin2.svg" alt="">
          </a> -->
          <a href="https://www.facebook.com/profile.php?id=61551469026955&mibextid=LQQJ4d" target="_blank">
            <img src="/img/icons/sn/meta2.svg" alt="">
          </a>
          <!-- <a href="#">
            <img src="/img/icons/sn/telegram2.svg" alt="">
          </a> -->
          <a href="https://x.com/wairld_official" target="_blank">
            <img src="/img/icons/sn/x2.svg" alt="">
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <ContactsForm />
      </div>
    </div>
  </div>
</template>

<script>
import ContactsForm from '@/components/elements/ContactsForm'
export default {
  components: {
    ContactsForm
  },
  data() {
    return {
    };
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>