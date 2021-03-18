<template>
    <section id="login" class="container max-w-3xl mx-auto my-10" v-if="true">
          <div class="w-full max-w-2xl mx-auto ">

            <div class="max-w-sm sm:max-w-xl mx-auto shadow-lg bg-white rounded p-4">
                    <h1 class="font-bold text-sm sm:text-xl text-center"> Login Form</h1>
              <div class="">
                <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Email</label>
                <input type="email" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.email" placeholder="Enter Your email">
              </div>
        
                <div class="mt-2">
                  <label for="password" class="block text-gray-700 font-semibold text-opacity-70"> Password</label>
                  <input type="password" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.password" placeholder="Enter Your password">
                </div>
              <button @click="fromSubmit" class="bg-blue-500 hover:bg-blue-700  mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </div>
          </div>
       </section>
      
     
</template>

<script>

import { mapActions } from 'vuex'
export default {
    name: 'Login',
   data(){
     
       return {
          
           form:{
               email:'asad@gmail.com',
               password:'123'
           }
       }
   },
   methods:{
       ...mapActions({
         signIn : 'auth/signIn'
       }),
      async  fromSubmit()
       {
      await  this.signIn(this.form)
   }
}
}
</script>
