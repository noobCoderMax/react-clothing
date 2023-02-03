import React from "react";
import { userStore, updateUserName } from "../../store/index";
import { useSnapshot } from "valtio";

const Valtio: React.FC = () => {
  const userInfo = useSnapshot(userStore);

  const setUser = () => {
    console.log("更改");
  };

  return (
    <div>
      <ul>
        <li>name:{userInfo.nickname}</li>
        <li>email:{userInfo.email}</li>
        <li>gender:{userInfo.gender}</li>
        <li>phone:{userInfo.phone}</li>
        <li>age:{userInfo.age}</li>
      </ul>

      <input type="text" onChange={e => updateUserName(e.target.value)} />
      <button onClick={e => setUser()}>更改</button>
    </div>
  );
};

export default Valtio;
