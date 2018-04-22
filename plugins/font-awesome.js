/**
 * see: https://dev.to/coolgoose/how-to-setup-font-awesome-5-as-vuecomponent-in-nuxtjs-54e4
 */

import Vue from 'vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'


fontawesome.library.add(brands)
Vue.component(FontAwesomeIcon.name, FontAwesomeIcon)
