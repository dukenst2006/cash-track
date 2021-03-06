
// Lodash
window._ = require('lodash');

// Bootstrap v4 require Tether for tooltips
window.Tether = require('tether');

// Jquery
window.$ = window.jQuery = require('jquery');

// Bootstrap
require('bootstrap');

// Vue.js
window.Vue = require('vue');

// Vue resource
require('vue-resource');

// Set up a laravel crfs implementation in vue-resource
Vue.http.interceptors.push((request, next) => {
    request.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;

    next();
});