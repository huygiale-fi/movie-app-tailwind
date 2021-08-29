import React, { useEffect } from 'react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { connect, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { emailRegExp, passwordRepExp, phoneRegExp, usernameRepExp } from '../Regexp/Regexp.';
import { RegisterAction } from '../../../store/actions/authAction'
function Register(props) {
    const history = useHistory()
    const {email,user} = useSelector(state => state.authReducer)
    
    if (email) {
        history.push("/login")
    }
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
        <div>

            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-12 ">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl">
                        
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="hoTen">
                                            Họ Tên
                                        </label>
                                        <input onChange={handleChange} className={`w-full focus:border-blue-400  px-3 py-2 text-sm leading-tight text-gray-700 ${touched.hoTen && errors.hoTen ? "border-red-500" : ''} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="hoTen" type="text" placeholder="Name" />
                                        {touched.hoTen && errors.hoTen && (<p className="text-xs italic text-red-500">{errors.hoTen}</p>)}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="soDt">
                                            Số Điện Thoại
                                        </label>
                                        <input onChange={handleChange} className={`w-full focus:border-blue-400 px-3 py-2 text-sm leading-tight text-gray-700 ${touched.soDt && errors.soDt ? "border-red-500" : ''} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="soDt" placeholder="Số Điện Thoại" />
                                        {touched.soDt && errors.soDt && (<p className="text-xs italic text-red-500">{errors.soDt}</p>)}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input onChange={handleChange} className={`w-full focus:border-blue-400 px-3 py-2 mb-3 text-sm leading-tight text-gray-700  ${touched.email && errors.email ? "border-red-500" : ''} border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="email" placeholder="Email" />
                                    {touched.email && errors.email && (<p className="text-xs italic text-red-500">{errors.email}</p>)}
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="taiKhoan">
                                            Tài Khoản
                                        </label>
                                        <input onChange={handleChange} className={`w-full focus:border-blue-400 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 ${touched.taiKhoan && errors.taiKhoan ? "border-red-500" : ''} border  rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="taiKhoan" type="text" placeholder="Username" />
                                        {touched.taiKhoan && errors.taiKhoan && (<p className="text-xs italic text-red-500">{errors.taiKhoan}</p>)}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="matKhau">
                                            Mật Khẩu
                                        </label>
                                        <input onChange={handleChange} className={`w-full focus:border-blue-400 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 ${touched.matKhau && errors.matKhau ? "border-red-500" : ''}  border rounded shadow appearance-none focus:outline-none focus:shadow-outline`} name="matKhau" type="password" placeholder="******************" />
                                        {touched.matKhau && errors.matKhau && (<p className="text-xs italic text-red-500">{errors.matKhau}</p>)}
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:pointer-events-none " disabled={(Object.entries(errors).length) === 0 ? false : true}>
                                        Register Account
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/forgot-password">
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/login">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{ backgroundImage: 'url("https://www.wallpapertip.com/wmimgs/35-350600_600-x-800.jpg")' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
const FormRegisterFormik = withFormik({
    mapPropsToValues: () => ({
        hoTen: '',
        soDt: '',
        email: '',
        taiKhoan: '',
        matKhau: ''
    }),

    // Custom sync validation


    validationSchema: Yup.object().shape({
        hoTen: Yup.string()
            .required('Name is required')
            .min(6, 'Name > 6 characters')
            .max(32, 'Name < 32 characters'),
        soDt: Yup.string()
            .matches(phoneRegExp, 'Invalid phone number')
            .required('Phone number is required'),
        email: Yup.string()
            .required('Email is required')
            .matches(emailRegExp, 'Invalid email'),
        taiKhoan: Yup.string()
            .required('Username is required')
            .matches(usernameRepExp, 'Invalid username'),
        matKhau: Yup.string()
            .required('Password is required')
            .matches(passwordRepExp, 'Invalid password')
    }),

    handleSubmit: (values, { props, setSubmitting }) => {
        console.log(values)
        props.dispatch(RegisterAction(values))
    },

    displayName: 'Register',
})(Register);
export default connect()(FormRegisterFormik);