
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment';
import { fetchMoviePage, changpage } from '../../../store/actions/movieActions';
import Loader from '../../../components/Loader/Loader';
export default function MovieList() {
    const dispatch = useDispatch();
    const { movie, page, tongpage, loading } = useSelector(state => state.movieReducer)
    // const [movie, setmovie] = React.useState([]);
    useEffect(() => {
        dispatch(fetchMoviePage(page))
    }, [page])

    //Render movie_page
    let renderMoviePage = () => {
        return movie?.map((item, index) => {
            return <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg ">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.hinhAnh} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">Khởi chiếu: {moment(item.ngayKhoiChieu).format('MMMM Do YYYY')}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.tenPhim}</h2>
                    <p className="leading-relaxed text-base truncate">{item.moTa}</p>
                    <Link className="bg-transparent mt-2  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to={`/movie-detail/${item.maPhim}`} >
                        Xem Chi Tiết
                    </Link>
                    <Link className="bg-transparent mt-2 float-right hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Mua Vé
                    </Link>
                </div>
            </div>
        })
    }
    // Change page
    let handlechangepage = (isvalue) => {
        dispatch(changpage(isvalue))
    }
    if (loading) return <Loader />
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container py-15 mx-auto">
                    <div className="flex flex-wrap py-5 -m-4">
                        {renderMoviePage()}
                    </div>
                    <ul className="text-center mt-3">
                        <li className="inline-block"><button className="bg-transparent mt-8  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none rounded " disabled={page === 1 ? true : false} onClick={() => handlechangepage(false)} > Prev</button></li>
                        <li className="inline-block mx-4">Page {page}/{tongpage} </li>
                        <li className="inline-block"><button className="bg-transparent mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none rounded" disabled={page === tongpage ? true : false} onClick={() => handlechangepage(true)} >Next</button></li>
                    </ul>
                </div>
            </section>

        </>
    )
}
