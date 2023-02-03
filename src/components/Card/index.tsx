import React from "react";
import s from "./index.module.less";
import classNames from "classnames";

type Props = {
  front: string,
  back: string,
}

const Card: React.FC<Props> = ({front,back}) => {
  return <div className={s.card}>
    <div className={classNames(s.card_side, s.front)}>
      <img src={front} alt="" />
    </div>
    <div className={classNames(s.card_side, s.back)}>
      <img src={back} alt="" />
    </div>
  </div>;
};

export default Card;
