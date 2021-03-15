<template>
  <div id="app" class="w-4/5 mx-auto">
   <navbar v-if="false"></navbar>
   <log-reg v-else> </log-reg>
    <router-view/>
  </div>
</template>

<script>

import navbar from './components/navbar.vue'
import logReg from './components/login-registration.vue'

export default {
  name: 'App',
  components:{
    navbar, 
    logReg
},

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
