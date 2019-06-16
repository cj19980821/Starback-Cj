import axios from 'axios';
import router from "../router/index";
const request = axios.create();
// {
//     baseURL:'http://localost:8081',
//     timeout:100
// }
//请求之前拦截器
request.interceptors.request.use((config) => {
    // console.log(config)
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem('token')
        }
    }
}, (error) => {
    return Promise.reject(error)
});

//响应之前拦截器
request.interceptors.response.use((response) => {
    return response.data;
}, (error) => {
    console.log(11)
    const response = error.response;
    const status = response.status;
    
    if (status > 400) {
        switch (status) {
            case 401://未登录
                router.push('/login');
                break;
            case 403:
                alert('没有权限');
                break;
            case 404:
                alert('页面走丢了');
                break;
        }
    }
    return Promise.reject(error);
});

// export default {
//     get(url, data) {
//         console.log(11)
//         return request.get(url, {
//             params: data
//         })
//     },
//     post(url, data) {
//         return request.post(url,data)
//     }
// }
export default request;