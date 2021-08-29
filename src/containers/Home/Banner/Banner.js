
import React from 'react'
import bannerApi from '../../../apis/bannerApi';

export default function Banner() {

    const [mangbanner, setmangbanner] = React.useState([]);
    React.useEffect(() => {
        bannerApi.fetchBanner()
            .then(res => {
                setmangbanner(res.data.content)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    let renderbanner = () => {
        return mangbanner.map((banner, index) => {
            return <div key={index}> <input className="carousel-open" type="radio" id={`carousel-${banner.maBanner}`} name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
                <div className="carousel-item ">
                    <img src={banner.hinhAnh} />
                </div>
            </div>
        })
    }


    return (
        <>
            <div className="carousel">
                <div className="carousel-inner">
                    {renderbanner()}
                    
                    <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
                    <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
                    <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
                    <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
                    <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
                    <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
                    <ol className="carousel-indicators">
                        <li>
                            <label htmlFor="carousel-1" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label htmlFor="carousel-2" className="carousel-bullet">•</label>
                        </li>
                        <li>
                            <label htmlFor="carousel-3" className="carousel-bullet">•</label>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}
