import React,{useEffect} from 'react'
import { Link ,Redirect,useHistory} from 'react-router-dom'
import {connect,  useSelector} from 'react-redux'
import { withFormik } from 'formik'
import * as Yup from "yup";
import {  usernameRepExp } from '../Regexp/Regexp.';
import { LoginAction } from '../../../store/actions/authAction';

function Login(props) {
    
    const history = useHistory();
    const {islogin,user} = useSelector((state)=>state.authReducer)
    useEffect(() => {
        if(islogin){
            history.push('/');
        }
    }, [history,islogin])
    if(user){
        return <Redirect to="/"/>
    }

    const {
        
        touched,
        errors,
        handleChange,
        
        handleSubmit,
    } = props;
    return (
        <>
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12 ">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://www.wallpapertip.com/wmimgs/35-350600_600-x-800.jpg")' }} />
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Login!</h3>
                            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="taiKhoan">
                                        Tài Khoản
                                    </label>
                                    <input onChange={handleChange} className={`w-full focus:border-blue-400 px-3 py-2 mb-3 text-sm leading-tight text-gray-700  ${errors.taiKhoan&& touched.taiKhoan  ? "border-red-500": ''} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="taiKhoan" placeholder="Username" />
                                    {touched.taiKhoan && errors.taiKhoan && (<p className="text-xs italic text-red-500">{errors.taiKhoan}</p>)}
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="matKhau">
                                        Mật Khẩu
                                    </label>
                                    <input onChange={handleChange}  type="password" className={`w-full focus:border-blue-400 px-3 py-2 mb-3 text-sm leading-tight text-gray-700  ${ errors.matKhau && touched.matKhau ? "border-red-500": ''} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="matKhau" placeholder="Password" />
                                    {touched.matKhau && errors.matKhau && (<p className="text-xs italic text-red-500">{errors.matKhau}</p>)}
                                </div>
                                
                                <div className="mb-6 text-center">
                                <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:pointer-events-none " disabled={(Object.entries(errors).length) === 0 ? false : true}>
                                        Login 
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/register">
                                        Tạo Tài Khoản!
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const FormLoginFormik = withFormik({
    mapPropsToValues: () => ({
        taiKhoan: '',
        matKhau: ''
    }),

    // Custom sync validation

    validationSchema: Yup.object().shape({
        taiKhoan: Yup.string()
            .required('Username is required'),
            
        matKhau: Yup.string()
            .required('Password is required'),
    }),

    handleSubmit: (values, {props, setSubmitting }) => {
        console.log(values)
        props.dispatch(LoginAction(values))
        
    },

    displayName: 'Login',
})(Login);

export default  connect()(FormLoginFormik);