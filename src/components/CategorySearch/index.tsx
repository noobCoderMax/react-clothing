import React, { useEffect, useRef, useState } from "react";
import s from './index.module.less'
import { DownOutlined, UpOutlined, RightOutlined } from '@ant-design/icons'
import CategoryInput from "../CategoryInput";

type Props = {
  getSearchInput: (value: string) => void
}

const CategorySearch: React.FC<Props> = (props) => {
  const { getSearchInput } = props
  let resizeRef = useRef<HTMLDivElement | null>(null);
  const [conditionStyleHeight, setConditionStyleHeight] = useState(50)
  const [showCondition, setShowCondition] = useState<boolean>(false)
  const [mood, setMood] = useState<string[]>(['恐惧', "悲伤", "自卑", "快乐", "抑郁", "忧郁", "焦虑", "易怒"])
  const [style, setStyle] = useState<string[]>(["街头风", "田园风", "古装风", "简约风", "学院风", "波西米亚风", "中性风", "BM风", "中国风", "民族风", "解构风", "哥特风", "北欧极简风", "洛可可风", "朋克风", "运动风"])
  const [season, setseason] = useState(["春季", "夏季", "秋季", "冬季", "四季"])
  const [size, setSize] = useState(["xxs", "xs", "s", "m", "l", "xl", "2xl", "xxxl", "xxxxl", "xxxxl"])
  const [suitablePeople, setSuitablePeople] = useState(["青少年", "青年", "中年", "老年"])
  const [clothingType, setClothingType] = useState(["男装", "女装", "休闲装", "运动装", "冬装", "童装", "流行男装", "男士内衣", "女士内衣", "亲子装"])
  const [TrendyMales, setTrendyMales] = useState(["夹克", "卫衣", "衬衫", "西装", "西装套餐", "民族服饰", "背心/马甲", "工装制服"])
  const [hotPoint, setHotPoint] = useState(["女装", "万圣节儿童服装", "服装女", "圣诞节服装", "品牌断码服装", "美人鱼服装", "女巫服装", "精灵服装"])

  useEffect(() => {
    handleResizeHeight()
    return () => {
      resizeObserver.disconnect()
    };
  }, [showCondition])

  const sendRequestToSearch = (confirm: boolean) => {
    console.log("confirm to send Requset to seach", confirm);
  }

  const handleShowCondition = (isShow: boolean) => {
    isShow ? setShowCondition(true) : setShowCondition(false)
  }

  const handleSeason = (seasonValue: string | string[]) => {
    console.log("seasonValue", seasonValue);
  }

  const handlePeople = (suitableValue: string | string[]) => {
    console.log("suitableValue", suitableValue);
  }

  const handleSize = (sizeValue: string | string[]) => {
    console.log("sizeValue", sizeValue);
  }

  const handleClothingType = (typeValue: string | string[]) => {
    console.log("typeValue", typeValue);
  }

  const handleTrendyMales = (trendyValues: string | string[]) => {
    console.log("trendyValues", trendyValues);
  }

  const handleMood = (moodValue: string | string[]) => {
    console.log("moodValue", moodValue);
  }

  const handleStyle = (styleValue: string | string[]) => {
    console.log("styleValue", styleValue);
  }

  const handleResizeHeight = () => {
    if (!showCondition) {
      setConditionStyleHeight(212)
      resizeObserver.observe(resizeRef.current!)
      resizeRef.current?.addEventListener("change", () => {
        resizeObserver.observe(resizeRef.current!);
      })
    } else {
      setConditionStyleHeight(50)
    }
  }

  const resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.contentBoxSize) {
        const contentBoxSize = Array.isArray(entry.contentBoxSize) ? entry.contentBoxSize[0] : entry.contentBoxSize;
        setConditionStyleHeight(Math.ceil(contentBoxSize.blockSize) + 50)
      }
    }
  });

  return <div className={s.category}>
    <div
      className={s.conditionList}
      style={
        {
          height: `${conditionStyleHeight}px`
        }
      }
    >
      <div className={s.conditionList_top}>
        <span className={s.span}>所有分类<RightOutlined /></span>
        {
          showCondition === false ?
            <span className={s.span} onClick={() => handleShowCondition(true)}>
              显示筛选 <DownOutlined />
            </span>
            :
            <span className={s.span} onClick={() => handleShowCondition(false)}>
              收起筛选 <UpOutlined />
            </span>
        }
      </div>
      <div className={s.conditionList} ref={resizeRef} >
        <CategoryInput label="当前情绪" confirmToSearch={value => sendRequestToSearch(value)} value={mood} getValue={(e) => handleMood(e)} />
        <CategoryInput label="风格选择" confirmToSearch={value => sendRequestToSearch(value)} value={style} getValue={(e) => handleStyle(e)} />
        <CategoryInput label="适用季节" confirmToSearch={value => sendRequestToSearch(value)} value={season} getValue={(e) => handleSeason(e)} />
        <CategoryInput label="适用对象" confirmToSearch={value => sendRequestToSearch(value)} value={suitablePeople} getValue={(e) => handlePeople(e)} />
        <CategoryInput label="选择尺寸" confirmToSearch={value => sendRequestToSearch(value)} value={size} getValue={(e) => handleSize(e)} />
        <CategoryInput label="流行男装" confirmToSearch={value => sendRequestToSearch(value)} value={TrendyMales} getValue={(e) => handleTrendyMales(e)} />
        <CategoryInput label="选择类型" confirmToSearch={value => sendRequestToSearch(value)} value={clothingType} getValue={(e) => handleClothingType(e)} />
      </div>
    </div>

    <div className={s.recommend}>
      <div className={s.recommend_label}>你是不是在找:</div>
      <div className={s.recommend_items}>
        {
          hotPoint.map((item, index) => {
            return <span key={index} onClick={() => getSearchInput(item)}>{item}</span>
          })
        }
      </div>
    </div>
  </div>
}

export default CategorySearch