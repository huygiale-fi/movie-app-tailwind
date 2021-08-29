import axios from "axios";
import axiosClient from "../utils/callApi"

const authApis = {
    postLogin: (datalogin) => {
        const url = 'QuanLyNguoiDung/DangNhap';
        return axiosClient.post(url,datalogin)
    },
    postRegister: (dataregister) => {
        const url = 'QuanLyNguoiDung/DangKy'
        return axiosClient.post(url,dataregister)
    },
    getUserAction: () => {
        const url = 'http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan';
        
        return axios({
            url:url,
            method:'post',
            headers: {'Authorization': 'Bearer '+ localStorage.getItem('accessToken')}
        })
        // return axiosClient.post(url, { headers: {'Authorization': 'Bearer ' + localStorage.getItem('accessToken') } })
        

        // })
    }
}

export default authApis;