<template>
  <div id="app" class="w-4/5 mx-auto">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'App',
  components:{
     navbar
  },
   watch: {
        $route: {
            immediate: true,
            handler(to) {
                document.title = to.meta.title || 'Home';
            }
        },
    }
}
</script>
