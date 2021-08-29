import axiosClient from "../utils/callApi";
import { GROUP_ID } from '../setting/apiconfig';
const movieApi = {
    fetchAllMoviePage: (sotrang) => {
        const url = `QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${sotrang}&soPhanTuTrenTrang=12`
        return axiosClient.get(url)
    },
    fetchMovieDetail: (movieid) => {
        const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieid}`
        return axiosClient.get(url)
    },
}
export default movieApi;