import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getInfoUserAction, LogoutAction } from '../../store/actions/authAction';
export default function Header() {
    const [toggleMenu, settoggleMenu] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user)
    const islogin = user ? true : false;
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(LogoutAction())
        history.push("/")
    }
    useEffect(() => {
        if (islogin) {
            dispatch(getInfoUserAction())
        }
    }, [dispatch, islogin])
    return (
        <>
            <nav className="bg-red-900 flex items-center justify-between flex-wrap bg-teal-500 px-6 py-2">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width={54} height={54} viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <Link className="font-semibold text-xl tracking-tight" to="/">Movie Now</Link>
                </div>
                <div className="block lg:hidden ">
                    <button onClick={() => settoggleMenu(!toggleMenu)} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                {toggleMenu ? (<div className="w-full block flex-grow  lg:flex lg:hidden lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">

                        <a href="#responsive-header" className="block p-3 mt-2 mb-1 transition duration-500 text-white rounded-sm lg:inline-block lg:mt-0 text-teal-200 hover:bg-white text-lg hover:text-red-900 ">
                            Docs
                        </a>
                        <a href="#responsive-header" className="block p-3 mb-1 text-white duration-500 rounded-sm lg:inline-block lg:mt-0 text-teal-200 hover:bg-white text-lg hover:text-red-900 ">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block p-3 mb-1 text-white duration-500 rounded-sm lg:inline-block lg:mt-0 text-teal-200 hover:bg-white text-lg hover:text-red-900">
                            Blog
                        </a>
                    </div>
                    <div>
                        {!user ? (<Link className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to="/login" onClick={() => settoggleMenu(!toggleMenu)}>Login</Link>) : (<div className="text-center flex  border-b">
                            <div className="h-12 w-12 rounded-full bg-gray-100 text-center relative">
                                <h5 className=" inset-x-0 top-2.5 absolute">{}</h5>
                            </div>

                            <Link to="/logout" className="bg-gray-500 text-white p-2 rounded" onClick={onLogout}>Đăng Xuất</Link>
                        </div>
                        )}
                    </div>
                </div>) : null}
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto smm:hidden">
                    <div className="text-sm lg:flex-grow">
                        <Link  className="block px-6 py-2 rounded-lg text-lg text-white hover:text-red-900  hover:bg-white lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Docs
                        </Link>
                        <a href="#responsive-header" className="block px-6 py-2 rounded-lg hover:text-red-900  hover:bg-white text-white text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Examples
                        </a>
                        <a href="#responsive-header" className="block px-6 py-2 rounded-lg hover:text-red-900  hover:bg-white text-white  text-lg lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Blog
                        </a>
                    </div>
                    <div>
                        {!user ? (<Link href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0" to="/login">Login</Link>) : (<div className="text-center flex  border-b">
                            <div className="h-12 w-12 rounded-full bg-gray-100 text-center relative">
                                <h5 className=" inset-x-0 top-2.5 absolute">{user.hoTen?.slice(0,3) }</h5>
                            </div>
                            <div className="group relative inline-block text-left">
                                <button type="button" className="inline-flex justify-center  w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                    {user.hoTen}
                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <ul className="origin-top-right group-hover:block hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                                    <div className="py-1" role="none">
                                        {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
                                        <Link to="/profile" className="text-gray-700 block px-4 hover:bg-red-900 hover:text-white py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-0">Account settings</Link>
                                        <Link to="/history" className="text-gray-700 block px-4 hover:bg-red-900 hover:text-white py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-1">History book ticket</Link>
                                        <button onClick={onLogout} className="text-gray-700 block hover:bg-red-900 hover:text-white w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex={-1} id="menu-item-3" >
                                            Sign out
                                        </button>
                                    </div>
                                </ul>
                            </div>

                        </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    )
}
