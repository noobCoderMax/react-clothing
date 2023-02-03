import React, { useRef, useState } from "react";
import s from "./index.module.less";
import wxImg from "../../assets/images/wx.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const formRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const navigate = useNavigate();

  const [loginValue, setLoginValue] = useState({ email: "", password: "" });
  const [registerValue, setRegisterValue] = useState({
    email: "",
    password: "",
    nickname: "",
    code: "",
  });

  const toLoginApi = () => {
    console.log("loginValue", loginValue);
    navigate("/index");
  };

  const toRegisterApi = () => {
    console.log("registerValue", registerValue);
  };

  const sendEmailCodeApi = () => {
    console.log("sendEmailCodeApi");
  };

  const toRegister = () => {
    console.log("toRegister");
    (formRef.current as any).style.transform = "rotateY(180deg)";
    (loginRef.current as any).style.display = "none";
    (registerRef.current as any).style.display = "flex";
  };

  const toLogin = () => {
    console.log("toLogin");
    (formRef.current as any).style.transform = "none";
    (registerRef.current as any).style.display = "none";
    (loginRef.current as any).style.display = "flex";
  };

  return (
    <div className={s.login}>
      <div className={s.mask}>
        <div className={s.form}>
          <div className={s.container}>
            <div className={s.container_description}>
              <img src={wxImg} alt="wx" />
              <span>更多咨询可扫码了解~</span>
            </div>
            <div className={s.container_form} ref={formRef}>
              <form className={s.container_form_login} ref={loginRef}>
                <h1>login</h1>
                <input
                  type="email"
                  placeholder="邮箱"
                  value={loginValue.email}
                  onChange={e =>
                    setLoginValue(pre => {
                      return {
                        ...pre,
                        email: e.target.value,
                      };
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="密码"
                  value={loginValue.password}
                  onChange={e =>
                    setLoginValue(pre => {
                      return {
                        ...pre,
                        password: e.target.value,
                      };
                    })
                  }
                />
                <button onClick={toLoginApi}>登录</button>
                <div className={s.container_form_control}>
                  <span onClick={toRegister}>
                    没有帐号？<span>去注册</span>
                  </span>
                </div>
              </form>
              <form className={s.container_form_register} ref={registerRef}>
                <h1>Register</h1>
                <input
                  type="text"
                  placeholder="用户名"
                  value={registerValue.nickname}
                  onChange={e =>
                    setRegisterValue(pre => {
                      return {
                        ...pre,
                        nickname: e.target.value,
                      };
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="邮箱"
                  value={registerValue.email}
                  onChange={e =>
                    setRegisterValue(pre => {
                      return {
                        ...pre,
                        email: e.target.value,
                      };
                    })
                  }
                />
                <input
                  type="password"
                  placeholder="密码"
                  value={registerValue.password}
                  onChange={e =>
                    setRegisterValue(pre => {
                      return {
                        ...pre,
                        password: e.target.value,
                      };
                    })
                  }
                />
                <div className={s.container_form_register_code}>
                  <input
                    type="text"
                    maxLength={4}
                    placeholder="验证码"
                    value={registerValue.code}
                    onChange={e =>
                      setRegisterValue(pre => {
                        return {
                          ...pre,
                          code: e.target.value,
                        };
                      })
                    }
                  />
                  <button onClick={sendEmailCodeApi}>发送验证码</button>
                </div>
                <button onClick={toRegisterApi}>注册</button>
                <div className={s.container_form_control}>
                  <span onClick={toLogin}>
                    已有帐号？<span>去登录</span>
                  </span>
                </div>
              </form>
            </div>
            <div className={s.container_description}>
              <img src={wxImg} alt="wx" />
              <span>更多咨询可扫码了解~</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
