<template>
    <div id="form" class="shadow-md bg-white rounded mt-5">
       <h1 class="font-bold  text-sm sm:text-xl pt-5 text-center"> Product Create</h1>
        <form action="" class="grid grid-cols-2 gap-3" @submit.prevent="submitForm()">
            <div class="m-2 col-span-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Title</label>
            <input placeholder="Enter Product title" v-model="form.title" type="text" class=" w-full p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" >
            </div>
            <div class="m-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Price</label>
                <input placeholder="Enter Product price only numeric value" v-model="form.price" type="text" class=" w-full p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" >
            </div>
             
            <div class="my-1 col-span-2 mx-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Description</label>
            <textarea placeholder="Write Product description at list 15 character" class="w-full text-grey-darkest border-b-2 border-gray-200 rounded focus:outline-none focus:border-blue-400" v-model="form.description"></textarea>
            </div>
            <div class="m-2">
             <label for="email" class="bloack text-gray-700 font-semibold text-opacity-70"> Image</label>
                <input  type="file"  @change="handleImage($event)" class="w-full p-1.5 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" accept="image/jpeg,jpg,png,gif" ref="image" > 
            </div>
           
            <div class="mt-1 mb-2 ml-2 m col-span-3">
            <button type="submit" class="bg-blue-500  hover:bg-blue-700  w-20 mx-auto mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                create
              </button>
            </div>
        </form>
    </div>
</template>
<script>
import toastr from 'toastr'
import axios from 'axios';
export default{
    'name' : 'ProductCreate',
    data(){
        return{
        form: this.initialform(),
        }
    },
    methods:{
        initialform(){
        return {
            title:null,
            description: null,
            price:null,
            image:null
           }
        },
         /**
          * image handle
         */
        handleImage(event){
            this.form.image = event.target.files[0]
        },

         /**
          * form submit
         */
        submitForm(){
            let data = new FormData();
            data.append('image', this.form.image);
            data.append('title', this.form.title);
            data.append('price', this.form.price);
            data.append('description', this.form.description);
            
            axios.post('/api/product/store', data)
            .then(res=>{
                if(res.data.success)
                {
                    toastr.success('Product has been successfully created');
                    this.$router.push('/product/manage');
                }
            })
            .catch(()=>
            {
                toastr.error('Something went wrong');
            })
            
        }
    }, 
}
</script>
