<template>
    <div class="m-5 shadow-xl">
       Welcome {{user.name}}
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>
