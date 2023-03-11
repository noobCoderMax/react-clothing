import React from "react";
import debounce from "../../utils/debounce";
import judgeType from "../../utils/judgeType";
import s from './index.module.less'
const emojis = [
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
  onClick: (value: string) => void,
  handleShowEmojiList: (show: boolean) => void
}

const EmojiList: React.FC<Props> = ({ onClick, handleShowEmojiList }) => {

  const hideEmojiList = (show: boolean) => {
    let timer = null

    if (timer !== null) {
      clearTimeout(timer)
      return
    }
    timer = setTimeout(() => {
      handleShowEmojiList(show)
    }, 1000);

  }

  return <div
    className={s.emoji}
    onMouseLeave={() => hideEmojiList(false)}
    onMouseEnter={() => hideEmojiList(true)}
  >
    {
      emojis.map((item, index) => {
        return <span key={index} onClick={() => onClick(item)}>{item}</span>
      })
    }
  </div>
}

export default EmojiList