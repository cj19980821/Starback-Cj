import request from '@/utils/request';
export default {
    namespaced: true,
    state: {
        userinfo: {}
    },
    mutations: {
        setuser(state, data) {
            state.userinfo = data;
        }
    },
    actions: {
        getUserInfo(context) {
            request.get("/api/user/info").then(res => {
                context.commit('setuser',res.data)
            });
        }
    }
}