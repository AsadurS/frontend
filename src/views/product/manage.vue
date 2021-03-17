<template>
    <div id="form" class="shadow-md bg-white rounded mt-10">
     <table class="w-full ">
          <thead class="bg-gray-100 p-8">
              <tr class="border-b ">
                  <td> Sl</td>
                  <td> Title </td>
                  <td>Description</td>
                  <td>Image</td>
                  <td>Actions</td>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>01</td>
                  <td>Lorem ipsum dolor sit....</td>
                  <td>Lorem ipsum dolor sit....</td>
                  <td><img src="../../assets/logo.png" class="h-8 w-8" alt=""> </td>
                  <td> <i class="las la-trash"></i> <i class="las la-edit la-2xl"></i> <i class="las la-eye la "></i></td>
              </tr>
          </tbody>
     </table>
    </div>
</template>
<script>
import axios from 'axios';
export default{
    mounted(){
      axios.get('api/product/manage')
      .then(res=>{
          console.log(res)
      })
    }
}
</script>
