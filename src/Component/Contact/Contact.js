import React, { useEffect, useState } from "react";
import { apiUrl } from "../../contexts/constants";
import "./Contact.css";
import anh from "./undraw_Contact_us_re_4qqt.png";

function Contact() {

  const [Phone, setPhone] = useState('')
  const [Email, setEmail] = useState('')
  const [DiaChi, setDiaChi] = useState('')
  const [Url, setUrl] = useState('')

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(apiUrl + "/v1/Contact/", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          setPhone(result.message[0].Phone)
          setEmail(result.message[0].Email)
          setDiaChi(result.message[0].DiaChi)
          setUrl(result.message[0].Url)
        }
      })
      .catch(error => console.log('error', error));
  }, [])


  const sendemail = () => {
    window.open("mailto:" + Email);
  }

  const phone = () => {
    window.open('tel:' + Phone);
  }

  const location = () => {
    window.open(Url, "_blank");
  }

  return (
    <div className="Contact-main" data-aos="fade-up">
      <h4>Liên hệ với chúng tôi</h4>
      <div className="Contact-container">

        <div className="Contact-container-box-1">

          <div className="Contact-box" data-aos="fade-up" onClick={phone}>
            <div>
              <h5 className="Contact-box-h5" data-aos="zoom-in">Phone</h5>
              <p data-aos="zoom-in">{Phone}</p>
            </div>
          </div>

          <div className="Contact-box" data-aos="fade-up" onClick={sendemail}>
            <div>
              <h5 className="Contact-box-h5" data-aos="zoom-in">Email</h5>
              <p data-aos="zoom-in">{Email}</p>
            </div>
          </div>

          <div className="Contact-box" data-aos="fade-up" onClick={location}>
            <div>
              <h5 className="Contact-box-h5" data-aos="zoom-in">Địa chỉ</h5>
              <p data-aos="zoom-in">{DiaChi}</p>
            </div>
          </div>

        </div>

        <div>
          <img className="Contact-img" src={anh} alt="" data-aos="fade-up"></img>
        </div>

      </div>
    </div>
  );
}

export default Contact;
