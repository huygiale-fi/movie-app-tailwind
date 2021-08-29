import axiosClient from "../utils/callApi"

const bannerApi = {
    fetchBanner: () => {
        const url = 'QuanLyPhim/LayDanhSachBanner';
        return axiosClient.get(url)
    },
}

export default bannerApi;