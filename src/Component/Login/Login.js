import './Login.css'
import { React, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { apiUrl } from '../../contexts/constants';
import { ToastContainer, toast } from 'react-toastify';

function Login() {
  let navigate = useNavigate();
  const [UserName, setUserName] = useState('')
  const [Password, setPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  //================

  const errorNof = (data) => {
    toast.error(data, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  //kiểm tra token and đẵ đăng nhập hay chưa
  useEffect(() => {
    const checklogin = () => {
      //kiểm tra có cookie nào tồn tại hay không
      if (document.cookie.split(';').some((item) => item.trim().startsWith('accessToken='))) {
        //đoc cookie
        const cookieValue = document.cookie
          .split('; ')
          .find(row => row.startsWith('accessToken='))
          .split('=')[1];
        //Gửi req token lên server xác thực
        var myHeaders = new Headers();
        myHeaders.append("token", cookieValue);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        return fetch(apiUrl + `/v1/login`, requestOptions)
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              navigate('/admin')
            } else {
              setLoading(true)
            }
          })
          .catch(error => console.log('error', error));
      } else {
        setLoading(true)
      }
    }
    checklogin()
  }, [navigate])

  //gủi req Email vs Password lên server
  const login = () => {
    setLoading(false)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", UserName);
    urlencoded.append("password", Password);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    fetch(apiUrl + `/v1/login`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          document.cookie = `accessToken= Bearer ${data.accessToken}`;
          navigate("/admin");
        }
        else {
          errorNof(data.message)
          setLoading(true)
        }
      })
      .catch(error => console.log('error', error));
  }

  let body
  if (Loading) {
    body = (

      <div className='body-login'>
        <ToastContainer />
        <div className="center">
          <h1>Login</h1>
          <div className='form'>
            <div className="txt_field">
              <input id='username' type="text" required onChange={e => setUserName(e.target.value)} />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input id='password' type="password" required onChange={e => setPassword(e.target.value)} />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <button id='btn' className='btn' onClick={login} >Login</button>
          </div>
        </div>
      </div>
    )
  } else {
    body = (
      <div className='loading'>Loading...</div>
    )
  }


  return (body)

}

export default Login