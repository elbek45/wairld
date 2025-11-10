<template>
  <div id="adminSideBar">
    <div class="adminSideBarHead">
      <nuxt-link to="/">
        <img src="/img/full-logo-white.svg" alt="">
      </nuxt-link>
    </div>
    <div class="adminSideBarBody scrollBar">
      <nav class="adminSideBarNav">
        <ul>
          <li>
            <nuxt-link to="/admin/team">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/team.svg" alt="">
              </div>
              <span>Team</span>
            </nuxt-link>
          </li>
          <li>
            <a>
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/home-hashtag.svg" alt="">
              </div>
              <span>Banner video</span>
            </a>
            <ul>
              <li>
                <nuxt-link to="/admin/media/home-banners">
                  <div class="adminSideBarIco">
                    <img src="/img/icons/admin/video-play.svg" alt="">
                  </div>
                  <span>Banner video</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/media/gallery-section">
                  <div class="adminSideBarIco">
                    <img src="/img/icons/admin/gallery.svg" alt="">
                  </div>
                  <span>Gallery section</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/section-with-blocks">
                  <div class="adminSideBarIco">
                    <img src="/img/icons/admin/gallery.svg" alt="">
                  </div>
                  <span>Section with blocks</span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/admin/faq">
                  <div class="adminSideBarIco">
                    <img src="/img/icons/admin/faq.svg" alt="">
                  </div>
                  <span>FAQ</span>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/admin/users">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/team.svg" alt="">
              </div>
              <span>Users</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/whitepaper">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Whitepaper</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/wiki">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Wiki</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/roadmap">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Roadmap</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/categories">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Categories</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/brands">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Brands</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/products">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Products</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/test-questions">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Test questions</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/ads-banners">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Ads banners</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/pages">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Pages</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/menu">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Menu</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/admin/articles">
              <div class="adminSideBarIco">
                <img src="/img/icons/admin/document-text.svg" alt="">
              </div>
              <span>Articles</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data(){
    return {
    }
  },
  computed: {
  },
  mounted(){
  },
  unmounted() {
  },
  methods:{
  }
};
</script>
