
import authApis from '../../apis/authApi'
import * as authType from '../constants/authType'

export const setAccessToken = (token) => ({
    type: 'ACCESS_TOKEN',
    payload: token,
  });

 export const LoginAction = (data) => async (dispatch)=>{
     try{
        const response = await authApis.postLogin(data)
        dispatch({
            type:authType.POST_LOGIN_SUCCESS,
            payload: response
        })
     }catch(err){
        dispatch({
            type:authType.POST_LOGIN_FAIL,
            payload:err
        })
     }
 }
 export const LogoutAction = ()=>async (dispatch)=>{
     dispatch({
         type:authType.LOGOUT
     })
 }

 export const RegisterAction = (data)=> async (dispatch)=>{
    try{
        const response = await authApis.postRegister(data)
        dispatch({
            type:authType.REGISTER_POST_SUCCESS,
            payload:response
        })
    }catch(response){
        dispatch({
            type:authType.REGISTER_POST_FAIL,
            payload:response
        })
    }
 }

 export const getInfoUserAction = () => async (dispatch)=>{
     try{
        console.log('hy')
        
        const response = await authApis.getUserAction()
        dispatch({
            type:authType.GET_INFO_USER_SUCCESS,
            payload:response
        })
    }catch(err){
        dispatch({
            type:authType.GET_INFO_USER_FAIL,
            payload:err
        })
     }
 }