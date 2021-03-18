<template>
     <section id="login" class="container max-w-3xl mx-auto my-10" v-if="true">
          <div class="w-full max-w-2xl mx-auto ">

            <form @submit.prevent="fromSubmit" class="max-w-sm sm:max-w-xl mx-auto shadow-lg bg-white rounded p-4">
                    <h1 class="font-bold text-sm sm:text-xl text-center"> Registration form</h1>
              <div class="">
                <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> name</label>
                <input type="text" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.name" placeholder="Enter Your email">
              </div>
              <div class="mt-2">
                <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Email</label>
                <input type="email" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.email" placeholder="Enter Your email">
              </div>
        
                <div class="mt-2">
                  <label for="password" class="block text-gray-700 font-semibold text-opacity-70"> Password</label>
                  <input type="password" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.password" placeholder="Enter Your password">
                </div>
                <div class="mt-2">
                  <label for="password" class="block text-gray-700 font-semibold text-opacity-70">Confirm Password</label>
                  <input type="password" class="w-11/12  p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" v-model="form.confirm_password" placeholder="Enter Your password">
                </div>
              <button class="bg-blue-500 hover:bg-blue-700 mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                SignUp
              </button>
            </form>
          </div>
       </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Register',
   data(){
       return {
           form:{
               name:null,
               email:null,
               password:null,
               confirm_password:null,
           }
       }
   },
   methods:{
      /**
      * get action from store
      */
      ...mapActions({
         signUp : 'auth/signUp'
       }),
        /**
          * form submit
         */
       async fromSubmit()
       {   
         this.signUp(this.form)
         
       }
   }
}
</script>
