<template>
   <nav class="h-16 text-white bg-gray-600 flex items-center shadow">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center">
                <div class="flex">
                    <router-link to="/dashboard" class="text-white font-semibold rounded-lg px-4 py-2  hover:bg-teal-500">
                         Dashboard
                    </router-link>
                    <div class="relative">
                        <button class="text-white font-semibold rounded-lg px-4 py-2  hover:bg-teal-50"
                                @click=" isPrDropdown = true">
                            <span>  Product <i class="la las la-angle-down la-xs"></i></span>
                        </button>

                        <div v-if=" isPrDropdown" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click=" isPrDropdown = false"></div>
                        <div class="absolute z-30 right-0 mt-2" :class="{'hidden': ! isPrDropdown}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <router-link  to="/product/create"  class="block text-purple-600 font-semibold px-4 py-2  hover:text-white hover:bg-purple-500"> Create</router-link>
                                <router-link  to="/product/manage" class="block text-purple-600 font-semibold px-4 py-2  hover:text-white hover:bg-purple-500">Manage</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="relative">
                        <button class="rounded-full overflow-hidden border-2 border-teal-500 w-10 h-10 flex justify-center items-center | hover:border-white focus:outline-none focus:border-white"
                                @click=" isUserDropdown = true">
                            <i class="las la-user-alt la-2x"></i>
                        </button>

                        <div v-if=" isUserDropdown" class="fixed inset-0 w-full h-screen z-20 bg-black opacity-25" @click=" isUserDropdown = false"></div>
                        <div class="absolute z-30 right-0 mt-2" :class="{'hidden': ! isUserDropdown}">
                            <div class="bg-white rounded-lg shadow-lg py-2 w-48">
                                <a href="#" class="block text-purple-600 font-semibold px-4 py-2  hover:text-white hover:bg-purple-500">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
       isPrDropdown:false,
       isUserDropdown: false,
    }
  },
 
};
</script>
