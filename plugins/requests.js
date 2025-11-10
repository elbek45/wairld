import auth from '~/api/auth.js'
import team from '~/api/team.js'
import mediaFiles from '~/api/mediaFiles.js'
import textBlocks from '~/api/textBlocks.js'
import whitepaper from '~/api/whitepaper.js'
import roadmap from '~/api/roadmap.js'
import classifiers from '~/api/classifiers.js'
import members from '~/api/members.js'
import wiki from '~/api/wiki.js'
import categories from '~/api/categories.js'
import brands from '~/api/brands.js'
import products from '~/api/products.js'
import testQuestions from '~/api/testQuestions.js'
import partnership from '~/api/partnership.js'
import users from '~/api/users.js'
import collections from '~/api/collections.js'
import adsBanners from '~/api/adsBanners.js'
import pages from '~/api/pages.js'
import menu from '~/api/menu.js'
import articles from '~/api/articles.js'

export default ({ app, $axios }, inject) => {
  inject('requests', {
    auth: auth($axios),
    team: team($axios),
    mediaFiles: mediaFiles($axios),
    textBlocks: textBlocks($axios),
    whitepaper: whitepaper($axios),
    roadmap: roadmap($axios),
    classifiers: classifiers($axios),
    members: members($axios),
    wiki: wiki($axios),
    categories: categories($axios),
    brands: brands($axios),
    products: products($axios),
    testQuestions: testQuestions($axios),
    partnership: partnership($axios),
    users: users($axios),
    collections: collections($axios),
    adsBanners: adsBanners($axios),
    pages: pages($axios),
    menu: menu($axios),
    articles: articles($axios),
  })
}