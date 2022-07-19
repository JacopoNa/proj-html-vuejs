import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faFolderOpen} from '@fortawesome/free-solid-svg-icons'
import { faStopwatch} from '@fortawesome/free-solid-svg-icons'
import { faWeightScale} from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCartShopping, faMagnifyingGlass, faPlay, faYoutube, faAngleRight, faDumbbell, faArrowRight, faFacebook, faTwitter, faInstagram, faLinkedin, faFolderOpen, faStopwatch, faWeightScale)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
