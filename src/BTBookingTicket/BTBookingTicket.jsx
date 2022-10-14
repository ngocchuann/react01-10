import React, { Component } from 'react'
import './BTBookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from '../data/danhSachGhe.json'
import HangGhe from './HangGhe';

export default class BTBookingTicket extends Component {


  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe,index) => { 
      return <div key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
      </div>
     }) 
  }


  render() {
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url("./img/bookingTicket/bgmovie.jpg")', backgroundSize: '100%' }}>
        <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className='container-fluid'>
            <div className="row">
              <div className="col-8 text-center">
                <h1 className='text-warning display-4'>BÀI TẬP ĐẶT VÉ CEYBERLEARN.VN</h1>
                <div className='mt-3 text-warning' style={{ fontSize: '25px' }}>Màn hình</div>
                <div className='mt-1' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div className='screen'></div>
                  {this.renderHangGhe()}
                </div>
              
              </div>
              <div className="col-4">
                <h1 style={{ fontSize: '30px' }} className='text-light mt-2'>DANH SÁCH GHẾ BẠN CHỌN</h1>
                <ThongTinDatGhe/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

