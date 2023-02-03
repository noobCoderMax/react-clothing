import React from "react";
import s from './index.module.less'
const emojis=[
        "😀",
        "😁",
        "😂",
        "😃",
        "😄",
        "😅",
        "😆",
        "😉",
        "😊",
        "😋",
        "😎",
        "😍",
        "😘",
        "😗",
        "😙",
        "😚",
        "😇",
        "😐",
        "😑",
        "😶",
        "😏",
        "😣",
        "😥",
        "😮",
        "😯",
        "😪",
        "😫",
        "😴",
        "😌",
        "😛",
        "😜",
        "😝",
        "😒",
        "😓",
        "😔",
        "😕",
        "😲",
        "😷",
        "😖",
        "😞",
        "😟",
        "😤",
        "😢",
        "😭",
        "😦",
        "😧",
        "😨",
        "😬",
        "😰",
        "😱",
        "😳",
        "😵",
        "😡",
        "😠",
        "😈",
        "👿",
        "💀",
        "☠",
        "👻",
        "👽",
        "👾",
        "💣",
        "💋",
        "💌",
        "💘",
        "❤",
        "💓",
        "💔",
        "💕",
        "💖",
        "💗",
        "💙",
        "💚",
        "💛",
        "💜",
        "💝",
        "💞",
        "💟",
        "💏",
        "🧑‍🤝‍🧑",
        "👈",
        "👉",
        "☝",
        "👆",
        "👇",
        "✌",
        "✋",
        "👌",
        "👍",
        "👎",
        "✊",
        "👊",
        "👋",
        "👏",
        "👐",
        "✍",
]

type Props = {
  onClick:(value:string)=>void
}

const EmojiList: React.FC<Props> = ({onClick}) => {
  return <div className={s.emoji}>
    {
      emojis.map((item,index) => {
        return <span key={index} onClick={()=>onClick(item)}>{item}</span>
      })
    }
  </div>
}

export default EmojiList