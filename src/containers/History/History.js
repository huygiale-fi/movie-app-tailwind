import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
export default function History() {
    const { thongTinDatVe } = useSelector(state => state.authReducer.user)
    
      
    let renderhistory =()=>{
       return thongTinDatVe?.map((ticket) => {
           const barcode = `https://www.webarcode.com/barcode/image.php?code=${ticket.maVe}${ticket.giaVe} &type=C128B&xres=1&height=50&width=167&font=3&output=png&style=196`
            return (
                <div key={ticket} class="py-6 flex flex-wrap justify-center bg-gray-100">
                    <div class="flex max-w-xl bg-white shadow-lg   rounded-lg overflow-hidden">
                        <div class="w-1/3 bg-cover" style={{backgroundImage:`url(${ticket.hinhAnh})`}}>
                        </div>
                        <div class="w-2/3 p-4">
                            <h1 class="text-gray-900 text-xl font-bold  ">{ticket.tenPhim}</h1>
                            <hr/>
                            <p class="text-gray-900 text-sm ">Mã vé: {ticket.maVe} | {moment(ticket.ngayDat).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p class="text-gray-900 text-sm ">Tên Rạp: {ticket.danhSachGhe[0].tenHeThongRap}</p>
                            <p class="text-gray-900 text-sm ">Rạp Số: {ticket.danhSachGhe[0].tenRap}</p>
                            <p class="text-gray-900 text-sm ">Ghế: {ticket.danhSachGhe?.map(item=>item.tenGhe + " ")} | Giá vé: {ticket.danhSachGhe.length} x {ticket.giaVe} </p>
                            <p class="text-gray-900 text-sm ">Tổng Cộng: {ticket.danhSachGhe.length * ticket.giaVe}</p>
                            <img src={barcode}/>
                            <p class="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>

                            <div class="flex item-center justify-between mt-3">
                                <h1 class="text-gray-700 font-bold text-xl">$220</h1>
                                <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
    })
}
    return (
        <div>
            
            {renderhistory()}
        </div>
    )
}
