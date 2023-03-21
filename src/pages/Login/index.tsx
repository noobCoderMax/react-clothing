import React, { useRef, useState } from "react";
import s from "./index.module.less";
import wxImg from "../../assets/images/wx.png";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import { LoginForm, registerForm } from "../../global";
import useAxio from "../../Hooks/useAxios";
import { useUserStore } from "../../store";
import classNames from "classnames";

const Login: React.FC = () => {
  const formRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage()
  const { setUserInfo, getToken } = useUserStore()
  const { post: postLoginValue } = useAxio({ showLoading: true, handleError: false })

  const [loginValue, setLoginValue] = useState<LoginForm>({ email: "", password: "", svg_code: "" });
  const [registerValue, setRegisterValue] = useState<registerForm>({
    email: "",
    password: "",
    userName: "",
    emailCode: "",
  });

  const toLoginApi = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await postLoginValue<{ success: boolean, message: string, data: any }>("/user/login", loginValue, { timeout: 500000 }).then(res => {
      console.log("用户信息", res.data);
      setUserInfo(res.data as any)
      navigate("/index")
      messageApi.success("登录成功!")
    }).catch(err => {
      messageApi.error("服务器出错了!")
    })
  };
  const toRegisterApi = () => {
    console.log("registerValue", registerValue);
  };

  const sendEmailCodeApi = () => {
    console.log("sendEmailCodeApi");
  };

  const toRegisterStyle = () => {
    console.log("toRegister");
    (formRef.current as any).style.transform = "rotateY(180deg)";
    (loginRef.current as any).style.display = "none";
    (registerRef.current as any).style.display = "flex";
  };

  const toLoginStyle = () => {
    console.log("toLogin");
    (formRef.current as any).style.transform = "none";
    (registerRef.current as any).style.display = "none";
    (loginRef.current as any).style.display = "flex";
  };

  return (
    <div className={s.login}>
      {contextHolder}
      <div className={s.mask}>
        <div className={s.form}>
          <div className={s.container}>
            <div className={classNames([s.container_description, s.book])}>
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
                    setLoginValue((pre: LoginForm) => {
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
                    setLoginValue((pre: LoginForm) => {
                      return {
                        ...pre,
                        password: e.target.value,
                      };
                    })
                  }
                />
                <div className={s.svgCode}>
                  <input
                    className={s.svgCode_input}
                    type="text"
                    placeholder="验证码"
                    value={loginValue.svg_code}
                    onChange={e =>
                      setLoginValue((pre: LoginForm) => {
                        return {
                          ...pre,
                          svg_code: e.target.value,
                        };
                      })
                    }
                  />
                  <img className={s.svgCode_img} src="http://localhost:5555/other/codeImg" alt="svgCode" />
                </div>
                <button onClick={(e) => toLoginApi(e)}>登录</button>
                <div className={s.container_form_control}>
                  <span onClick={toRegisterStyle}>
                    没有帐号？<span>去注册</span>
                  </span>
                </div>
              </form>
              <form className={s.container_form_register} ref={registerRef}>
                <h1>Register</h1>
                <input
                  type="text"
                  placeholder="用户名"
                  value={registerValue.userName}
                  onChange={e =>
                    setRegisterValue((pre: registerForm) => {
                      return {
                        ...pre,
                        userName: e.target.value,
                      };
                    })
                  }
                />
                <input
                  type="email"
                  placeholder="邮箱"
                  value={registerValue.email}
                  onChange={e =>
                    setRegisterValue((pre: registerForm) => {
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
                    setRegisterValue((pre: registerForm) => {
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
                    value={registerValue.emailCode}
                    onChange={e =>
                      setRegisterValue((pre: registerForm) => {
                        return {
                          ...pre,
                          emailCode: e.target.value,
                        };
                      })
                    }
                  />
                  <button onClick={sendEmailCodeApi}>发送验证码</button>
                </div>
                <button onClick={toRegisterApi}>注册</button>
                <div className={s.container_form_control}>
                  <span onClick={toLoginStyle}>
                    已有帐号？<span>去登录</span>
                  </span>
                </div>
              </form>
            </div>
            <div className={s.container_description}>
              <img src="http://test.kuugacoder.top/logo.png" alt="wx" />
              <span style={{ fontSize: '30px' }}>服装推荐</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
