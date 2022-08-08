import React from "react";
import "./Procedure.css";
import { useNavigate } from "react-router-dom"
import anh from './loan.png'

const Procedure = () => {
  const navigate = useNavigate()
  const CilckLoan = (data) => {
    return (event) => {
      navigate(data)
    }
  }

  return (
    <>
      <div className="procedure-main" data-aos="fade-up">
        <div className="procedure-container">
          <div className="procedure-box" data-aos="fade-up" onClick={CilckLoan('/loan-1')}>
            <div>
              <img data-aos="zoom-in" className="procedure-img" src={anh} alt=""></img>
              <h4 data-aos="zoom-in">Vay thế chấp dự án lớn</h4>
            </div>
          </div>
          <div className="procedure-box" data-aos="fade-up" onClick={CilckLoan('/loan-2')}>
            <div>
              <img data-aos="zoom-in" className="procedure-img" src={anh} alt=""></img>
              <h4 data-aos="zoom-in">Vay thế chấp khách hàng doanh nghiệp</h4>
            </div>
          </div>
          <div className="procedure-box" data-aos="fade-up" onClick={CilckLoan('/loan-3')}>
            <div>
              <img data-aos="zoom-in" className="procedure-img" src={anh} alt=""></img>
              <h4 data-aos="zoom-in">Vay thế chấp khách hàng cá nhân</h4>
            </div>
          </div>
          <div className="procedure-box" data-aos="fade-up" onClick={CilckLoan('/loan-4')}>
            <div>
              <img data-aos="zoom-in" className="procedure-img" src={anh} alt=""></img>
              <h4 data-aos="zoom-in">Tái cấu trúc doanh nghiệp</h4>
            </div>
          </div>
          <div className="procedure-box" data-aos="fade-up" onClick={CilckLoan('/loan-5')}>
            <div>
              <img data-aos="zoom-in" className="procedure-img" src={anh} alt=""></img>
              <h4 data-aos="zoom-in">Vay hạn mức doanh nghiệp vừa và doanh nghiệp lớn</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Procedure;
