import React,{useState} from 'react'
import { useSelector } from 'react-redux'
export default function Profile() {
    const { user } = useSelector(state => state.authReducer)
    const [showmodal,setshowmodal] =  useState(false)
    return (
        <>
            <section className="h-400 bg-gray-100 bg-opacity-50 pt-10 pb-10">
                <div className="container max-w-2xl mx-auto shadow-md md:w-3/4">
                    <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                        <div className="max-w-sm mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="https://www.ihep.org/wp-content/themes/ihep-theme/assets/images/user-profile.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                                </a>
                                <h1 className="text-gray-600">
                                    {user.hoTen}
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6 bg-white">
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Account
                            </h2>
                            <div className="max-w-sm mx-auto md:w-2/3">
                                <div className=" relative ">
                                    <input type="text" id="user-info-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email" value={user.email} />
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
                            <h2 className="max-w-sm mx-auto md:w-1/3">
                                Personal info
                            </h2>
                            <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                                <div>
                                    <div className=" relative ">
                                        <input type="text" id="user-info-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name" value={user.taiKhoan} />
                                    </div>
                                </div>
                                <div>
                                    <div className=" relative ">
                                        <input type="text" id="user-info-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Phone number" value={user.soDt} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                            <button onClick={()=>setshowmodal(true)}  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
{showmodal ? (<div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">​</span>
    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
            
            <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Error
            </h3>
            <div className="mt-2">
              <p className="text-sm text-gray-500">
               Liên hệ admin để được cập nhật thông tin
               <br/>
               Email: huygiale@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button onClick={()=>setshowmodal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          OK
        </button>
      </div>
    </div>
  </div>
</div>) : ''}



        </>
    )
}
