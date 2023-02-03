import React, { ReactNode, useState } from "react";
import s from "./index.module.less";

export type Tab = {
  title: string;
  element: ReactNode;
};

export type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className={s.tabs}>
      <div className={s.tabs_title}>
        {tabs.map((item, index) => {
          return (
            <div
              key={index}
              className={s.tabs_title_item}
              onClick={() => setToggleState(index)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className={s.tabs_content}>{tabs[toggleState].element}</div>
    </div>
  );
};

export default Tabs;
