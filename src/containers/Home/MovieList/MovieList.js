import { concat } from 'lodash';
import React from 'react'
import movieApi from '../../../apis/movieApi';
import { Link } from 'react-router-dom'
import moment from 'moment';
export default function MovieList() {

    const [movie, setmovie] = React.useState([]);
    const [page, setpage] = React.useState(1);
    const [totalPages, settotalPages] = React.useState('');
    React.useEffect(() => {
        movieApi.fetchAllMovie(page)
            .then(res => {
                console.log(res.data.content.items)
                setmovie(res.data.content.items)
                setpage(res.data.content.currentPage)
                settotalPages(res.data.content.totalPages)
            }).catch(err => {
                console.log(err)
            })
    }, [page])


    let renderallmovie = () => {
        return movie.map((item, index) => {
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

    let handlechangepage = (isvalue) => {
        if (isvalue) {
            if (page < totalPages) {
                setpage(page + 1)
            } else {
                return;
            }
        } else {
            if (page > 1) {
                setpage(page - 1)
            } else {
                return;
            }
        }
    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container py-15 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded" />
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {renderallmovie()}
                    </div>
                    <ul className="text-center mt-3">
                        <li className="inline-block"><button className="bg-transparent mt-8  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none rounded " disabled={page === 1 ? true : false} onClick={() => handlechangepage(false)} > Prev</button></li>
                        <li className="inline-block mx-4">Page {page}/{totalPages} </li>
                        <li className="inline-block"><button className="bg-transparent mt-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent disabled:opacity-50 disabled:pointer-events-none rounded" disabled={page === totalPages ? true : false} onClick={() => handlechangepage(true)} >Next</button></li>
                    </ul>
                </div>
            </section>

        </div>
    )
}
