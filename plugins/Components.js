import Vue from 'vue'

import PhoneMask from '@/components/elements/PhoneMask';
Vue.component('phone-input', PhoneMask);

import loader from '@/components/loaders/Index';
Vue.component('v-loader', loader);

import FormOption from '@/components/elements/FormOption';
Vue.component('form-option', FormOption);

import TableRow from '@/components/elements/TableRow';
Vue.component('TableRow', TableRow);