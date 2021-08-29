import * as authType from '../constants/authType'
import toast from 'react-hot-toast'

const initialState = {
    islogin: false,
    user:localStorage.getItem('user'),
    token: localStorage.getItem('accessToken'),
    email:''
}

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case authType.POST_LOGIN_REQUEST:
        return {...state}
    case authType.POST_LOGIN_SUCCESS:
        console.log(payload)
        localStorage.setItem('user',JSON.stringify(payload.data.content))
        localStorage.setItem('accessToken',payload.data.content.accessToken)
        return {...state,islogin:true, user:payload.data.content,token:payload.data.content.accessToken }
    case authType.POST_LOGIN_FAIL:
        toast.error('Sai Mật Khẩu Hoặc Tài Khoản Không Tồn Tại')    
        console.log("TAI khoan k ton tai")
        return {...state}
    case authType.LOGOUT:
        localStorage.clear();
        return {...state,
            user:null,
            token:null,
            islogin:false,
        }
    case authType.REGISTER_POST_SUCCESS:
        toast.success('Đăng kí thành công')
        return {...state,email:payload.data.content.email}
    case authType.REGISTER_POST_FAIL:
        toast.error('Email hoặc Tài khoản đã tồn tại')
        return {...state}
    case authType.GET_INFO_USER_SUCCESS:
        toast.success('success')
        console.log(payload)
        localStorage.setItem('user',JSON.stringify(payload.data.content))
        return {...state, user:payload.data.content}
    case authType.GET_INFO_USER_FAIL:
        toast.error('success')
        return {...state}
    default:
        return state
    }
}
export default authReducer;