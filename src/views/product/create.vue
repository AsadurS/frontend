<template>
    <div id="form" class="shadow-md bg-white rounded mt-5">
    
        <form action="" class="grid grid-cols-2 gap-3">
            <div class="m-2">
             <label class="block text-gray-800"> Title </label>
            <input placeholder="Enter Product " type="text" class=" w-full p-2 shadow border-0 rounded text-gray-800" >
            </div>
            <div class="m-2">
             <label class="block text-gray-800"> Price </label>
                <input placeholder="Enter Product " type="text" class=" w-full p-2 shadow border rounded text-gray-800" >
            </div>
            <div class="my-1 mx-2">
             <label class="block text-gray-800"> Description </label>
            <ckeditor :editor="editor" class="h-96" v-model="editorData" :config="editorConfig"></ckeditor>
            </div>
            <div class="m-2">
             <label class="block text-gray-800"> Image </label>
                <img src="../../assets/logo.png" class=" w-120 h-120 rounded" />
                <input  type="file" @change="handleImage()" class="hidden" accept="image/*" ref="image" >
                <button class="bg-gray-600 text-white py-2 px-4 rounded-full hover:bg-green-600" @click="$refs.image.click()"> <i class="la la-upload"></i> Upload </button>
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
        editorData: '<p>Content of the editor.</p>',
        editorConfig: {
            
        }  
        }
    },
}
</script>
