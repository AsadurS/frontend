<template>
    <div id="form" class="shadow-md bg-white rounded mt-5">
       <h1 class="font-bold  text-sm sm:text-xl pt-5 text-center"> Product Create</h1>
        <form action="" class="grid grid-cols-2 gap-3">
            <div class="m-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Title</label>
            <input placeholder="Enter Product title" v-model="form.title" type="text" class=" w-full p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" >
            </div>
            <div class="m-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Price</label>
                <input placeholder="Enter Product price" v-model="form.price" type="text" class=" w-full p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" >
            </div>
             <div class="m-2">
             <label for="email" class="bloack text-gray-700 font-semibold text-opacity-70"> Image</label>
                <input  type="file"  @change="handleImage()" class="w-full p-1.5 border-b-2 border-gray-200 focus:outline-none focus:border-blue-400" accept="image/*" ref="image" > 
            </div>
            <div class="my-1 col-span-3 mx-2">
             <label for="email" class="block text-gray-700 font-semibold text-opacity-70"> Description</label>
            <ckeditor :editor="editor" v-model="form.description" class="ck-editor__editable"  :config="editorConfig"></ckeditor>
            </div>
           
            <div class="mt-1 mb-2 ml-2 m col-span-3">
            <button class="bg-blue-500  hover:bg-blue-700  w-20 mx-auto mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                create
              </button>
            </div>
        </form>
    </div>
</template>
<script>

 import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default{
    

    'name' : 'ProductCreate',
    
    data(){
        return{
        image:null,
        blobUrk: null,
        editor: ClassicEditor,
       
        editorConfig: {
             height: '500px'
        } ,
        form: this.initialform(),
        }
    },
    methods:{
initialform(){
    return {
        title:null,
        description: null,
        price:null,
    }
}
    }
}
</script>
<style>
  .ck-editor__editable {
    min-height: 150px;
   }
</style>
