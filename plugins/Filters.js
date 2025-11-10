import Vue from 'vue'

import { correctNumber, formatDate, firstCharUppercase, formatPrice, upper, fullpath, timer, link } from "@/filters";
Vue.filter("first-ch-upper", firstCharUppercase);
Vue.filter("price", formatPrice);
Vue.filter("upper", upper);
Vue.filter('date', formatDate);
Vue.filter('fullpath', fullpath)
Vue.filter('timer', timer)
Vue.filter('link', link)
Vue.filter('cNumber', correctNumber)