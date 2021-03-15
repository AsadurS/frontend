<template>
  <div id="app" class="w-4/5 mx-auto">
   <navbar v-if="false"></navbar>
      <loginRegistration></loginRegistration>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from './components/navbar.vue'
import loginRegistration from './components/login.vue'
export default {
  name: 'App',
  components:{
    navbar, 
    loginRegistration
},

   watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'Home';
            }
        },
    },
    mounted()
    {
        axios.get('api/get').then(res=>{
          console.log(res);
        })
    }
}
</script>
