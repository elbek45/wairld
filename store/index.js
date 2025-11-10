import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loader from './loader';
import auth from './auth';
import team from './team';
import mediaFiles from './mediaFiles'
import textBlocks from './textBlocks'
import whitepaper from './whitepaper'
import roadmap from './roadmap'
import classifiers from './classifiers'
import members from './members'
import wiki from './wiki'
import app from './app'
import categories from './categories'
import brands from './brands'
import products from './products'
import testQuestions from './testQuestions'
import partnership from './partnership'
import users from './users'
import collections from './collections'
import adsBanners from './adsBanners'
import pages from './pages'
import menu from './menu'
import articles from './articles'

const store = new Vuex.Store({
  modules: {
    auth,
    loader,
    team,
    mediaFiles,
    textBlocks,
    whitepaper,
    roadmap,
    classifiers,
    members,
    wiki,
    app,
    categories,
    brands,
    products,
    testQuestions,
    partnership,
    users,
    collections,
    adsBanners,
    pages,
    menu,
    articles
  }
});

export default () => store;

export function resetState() {
  store.state.auth.is_auth = false;
  store.state.auth.user = null;
  store.state.auth.role_name = null;
}
