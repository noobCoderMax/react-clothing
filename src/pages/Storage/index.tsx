import React, { useEffect, useState } from "react";
import { myLocal, mySession } from "../../utils/storage";

const Storage: React.FC = () => {
  const [data, setData] = useState({});

  const setLocal = () => {
    myLocal.set("local", {
      name: "local",
      age: 12,
      gender: "famale",
    });
  };

  const setSession = () => {
    mySession.set("session", {
      name: "session",
      age: 13,
      gender: "male",
      habbit: ["1", "2", "3"],
    });
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div>
      <button onClick={() => setLocal()}>localStorage</button>
      <button onClick={() => setSession()}>sessionStorage</button>
      <button
        onClick={() => {
          myLocal.remove("local");
        }}
      >
        删除local
      </button>
      <button
        onClick={() => {
          mySession.remove("session");
        }}
      >
        删除session
      </button>
      <button
        onClick={() => {
          setData(myLocal.get("local"));
        }}
      >
        myLocal
      </button>
      <button
        onClick={() => {
          setData(mySession.get("session"));
        }}
      >
        mySession
      </button>
    </div>
  );
};

export default Storage;
