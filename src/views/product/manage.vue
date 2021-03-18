<template>
    <div id="form" class="overflow-x-auto bg-white rounded-lg shadow-lg overflow-y-auto relative mt-5">
     <table class="w-full border-collapse table-auto whitespace-no-wrap bg-white table-striped relative"  >
          <thead>
              <tr class="text-left">
                  <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> #</th>
                  <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> Title</th>
                  <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> Description</th>
                  <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> price</th>
                  <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> image</th>
                 <th class="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"> <span class="m-1.5 "> </span> </th>
              </tr>
          </thead>
          <tbody >
              <tr v-for="(product,index) in products" :key="index">
                  <td class="border-dashed border-t border-gray-200 px-3" >{{index+1}}</td>
                  <td class="border-dashed border-t border-gray-200 px-3" >{{product.title}}</td>
                  <td class="border-dashed border-t border-gray-200 px-3" >{{product.description}}</td>
                  <td class="border-dashed border-t border-gray-200 px-3" >{{product.price}}</td>
                  <td class="border-dashed border-t border-gray-200 px-3" >
                      <img :src="product.image" class="h-8 w-8 m-1.5" alt=""> 
                   </td>
                  <td class="border-dashed border-t border-gray-200 px-3" > 
                      <span class="float-right mr-2">
                         <button @click="deleteProduct(product.deleteLink)" class="bg-red-300 rounded px-2 m-1.5 hover:bg-red-500"> <i class="las la-trash xl"></i> </button>  
                          <router-link :to="{name: 'ProductUpdate', params:{product: product.uuid}}"  class="bg-blue-300 rounded px-2 hover:bg-blue-500"> <i class="las la-edit la-xl"></i> </router-link> 
                      </span>
                  </td>
              </tr>
          </tbody>
     </table>
     <h1 class="text-center m-20" v-if="products.length == 0"> No Record Found </h1>
    </div>
</template>
<script>
import axios from 'axios';
import toastr from 'toastr';
export default{
    data()
    {
        return  {
            products: [],
        }
    },
    methods:{
        getProducts()
        {
            axios.get('api/product/manage')
      .then(res=>{
          this.products = res.data.products
      }) 
        },
        deleteProduct(link)
        {
            axios.post(link)
            .then(res=>
            {
             if(res.data.success)
            {
                toastr.success('Product has been successfully Updated');
                this.$router.push('/product/manage');
                this.getProducts();
            }
           
        })
        .catch(()=>
        {
            toastr.error('Something went wrong');
        })  
        
        },

         editProduct(product)
        {
            let path = `${product.uuid}/update`;
            console.log(path);
            this.$router.push(path)
        }
    },
    mounted(){
     this.getProducts()
    }
}
</script>
