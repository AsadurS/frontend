<template>
  <div id="app" class="w-4/5 mx-auto">
   <navbar v-if="authenticated"></navbar>
   <log-reg v-else> </log-reg>
    <router-view/>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import logReg from './components/login-registration.vue'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components:{
    navbar, 
    logReg
},

computed:{
...mapGetters({
    authenticated: 'auth/authenticated'
  })
},
  /**
  * dynamically title change
  */
  watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'Home';
            }
        },
    },
}
</script>

