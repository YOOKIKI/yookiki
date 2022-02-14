import React from "react";
import "./Login.css"

// export default function Login() {
//   return <div>Login</div>;
// }

// 혹은 const 함수 방법

const Login = () => {


  return (
    <>
      <section>
        <article>
          <div className="loginBox">
            <h1 className="logo">Westagram</h1>
            <div>
              <form className="loginForm">
                <input type="text" id="idInput" placeholder="전화번호, 사용자 이름 또는 이메일" />
                <input type="password" id="pwInput" placeholder="비밀번호" />
              </form>
              <button id="loginClick" className="loginButton">로그인</button>
              <a className="forgotPwd">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </article>
      </section>
    </>
  )
};

export default Login;