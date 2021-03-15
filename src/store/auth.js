import axios from 'axios'
export default {
    namespaced:true,
  state: {
    user: null,
    token:null,
  },
  mutations: {
  },
  actions: {
   async signIn(__,credentials)
      {
       
        await axios.post("api/auth/login",credentials)
        .then(res=>{
          console.log(res);
        });
      }
  },
  modules: {
      
  }
}