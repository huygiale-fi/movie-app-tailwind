import callAPI from "../utils/callApi";
import { GROUP_ID } from '../setting/apiconfig';
const movieApi = {
    fetchAllMovie: (sotrang) => {
        return callAPI(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUP_ID}&soTrang=${sotrang}&soPhanTuTrenTrang=12`, "GET")
    },
    fetchMovieDetail: (movieid) => {
        return callAPI(`QuanLyPhim/LayThongTinPhim?MaPhim=${movieid}`, "GET")
    },
}
export default movieApi;