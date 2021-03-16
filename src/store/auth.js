import axios from 'axios'
import toastr from 'toastr'
import router from '../router';
export default {
    namespaced:true,
  state: {
    user: null,
    token:null,
  },
  mutations: {
    SET_TOKEN(state, token)
    {
      state.token = token;
    },
    SET_USER(state, user)
    {
      state.user = user;
    }
  },
  getters:{

  },
  actions: {
   async signIn({dispatch },credentials)
      {
       
        await axios.post("api/auth/login",credentials)
        .then(res=>{
          console.log(res);
          if(res.data.success)
          {
            router.push('/dashboard');
            dispatch('authenticate', res.data.access_token);
            toastr.success('Yah! successfully login');
            
          }
          else{
            toastr.error('something went wrong');
          }
        })
        .catch(e=>{
          toastr.error(e.response.data.error)
        });
      },
      async authenticate({commit,state},token)
      {
        
        if(token)
        {
          commit('SET_TOKEN',token)
        }
        if(!state.token) return;
        try{
           await axios.post('api/auth/me').
           then(res=>{
        
             commit('SET_USER',res.data)
           })
        }catch(e)
        {
          commit('SET_TOKEN', null)
          commit('SET_USER', null)
        }
      }
  },
  modules: {
      
  }
}