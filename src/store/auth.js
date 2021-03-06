import axios from 'axios'
import toastr from 'toastr'
import router from '../router';
export default {
    namespaced: true,
    state: {
        user: null,
        token: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user
        }
    },

    /**
     * sign in
     */
    actions: {
        async signIn({ dispatch }, credentials) {
            await axios.post("api/auth/login", credentials)
                .then(res => {
                    router.push('/dashboard');
                    dispatch('authenticate', res.data.access_token);
                    toastr.success('Yah! successfully login');

                })
                .catch(() => {
                    toastr.error('Something went wrong');
                });
        },

        /**
         * sign up
         */
        async signUp({ dispatch }, credentials) {

            await axios.post("api/auth/registration", credentials)
                .then(res => {
                    router.push('/dashboard');
                    dispatch('authenticate', res.data.access_token);
                    toastr.success('Yah! successfully Regiter');

                })
                .catch(() => {
                    toastr.error('Something went wrong');
                });
        },


        /**
         * check aouthinticated or not
         */
        async authenticate({ commit, state }, token) {

            if (token) {
                commit('SET_TOKEN', token)
            }
            if (!state.token) return;
            try {
                await axios.post('api/auth/me').
                then(res => {

                    commit('SET_USER', res.data)
                })
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },


        /**
         * sign out
         */
        async logOut({ commit }) {
            try {
                await axios.post('api/auth/logout').
                then(res => {

                    commit('SET_TOKEN', null)
                    commit('SET_USER', null)

                    router.push('/login');
                    toastr.success(res.data.message);
                })
            } catch (e) {
                toastr.error('something went wrong');
            }
        }
    },

    modules: {

    }
}