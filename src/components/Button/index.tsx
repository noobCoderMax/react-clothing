import { FC, useEffect, useState } from 'react'
import s from './index.module.less'

type Props = {
  number: number,
  onText: string,
  onLoadingText?: string,
  onClick: (value: boolean) => void,
  color?: string,
  bgColor?: string
}

const ButtonCountDown: FC<Props> = (props) => {
  const { number = 60, onText, onLoadingText, onClick, color = "#fff", bgColor = "#31aec4" } = props
  const [countDown, setCountDown] = useState(number)
  const [isLoding, setIsLoading] = useState<boolean>(false)
  let timer: NodeJS.Timer | number = 0

  useEffect(() => {
    if (isLoding) {
      timer = setInterval(() => {
        setCountDown(pre => {
          if (pre <= 0) {
            setIsLoading(false)
            clearInterval(timer)
            return number
          } else {
            return pre -= 1
          }
        })
      }, 1000)
    }
    return () => {
      clearInterval(timer)
    }

  }, [isLoding, countDown])

  const _onClick = (value: boolean) => {
    setIsLoading(true)
    onClick(value)
  }

  return <button
    className={s.btn}
    onClick={(e) => _onClick(true)}
    disabled={isLoding ? true : false}
    style={{
      color,
      backgroundColor: isLoding ? "#ccc" : bgColor
    }}
  >
    {
      isLoding ? `${countDown}秒` : `${onText}`
    }
  </button>
}

export default ButtonCountDown