import { Tabs } from "antd";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import TabHistoryData from "../TabHistoryData";
import s from './index.module.less'

type TabDate = {
  index: number,
  label: "今天" | "昨天" | "七天内" | "更早",
  value: "today" | "yesterday" | "seven_days_ago" | "earlier"
}

const enum TabTimes {
  today = 0,
  yesterday = 1,
  seven_days_ago = 2,
  earlier = 3
}

const TabHistory: FC = () => {
  const [history, setHistory] = useState<TabDate[]>([
    {
      index: TabTimes.today,
      label: "今天",
      value: "today"
    },
    {
      index: TabTimes.yesterday,
      label: "昨天",
      value: "yesterday"
    },
    {
      index: TabTimes.seven_days_ago,
      label: "七天内",
      value: "seven_days_ago"
    }, {
      index: TabTimes.earlier,
      label: "更早",
      value: "earlier"
    }
  ])
  const [historyRequest, setHistoryRequest] = useState({
    range: "",
    currentPage: 1,
    pageSize: 8
  })

  let historyDataTemp = [
    {
      id: "1",
      img: "http://test.kuugacoder.top/Fo6xDVBAUC-rrwDk6VRe_FhfYtgC",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    },
    {
      id: "2",
      img: "http://test.kuugacoder.top/clothingkHFb-Yoo04zFYNG6nfMwH",
      title: "中国风",
      style: "中国风",
      desc: "中国风最新上市流行款",
      timeRange: "today"
    },
    {
      id: "3",
      img: "http://test.kuugacoder.top/clothingXK_kJWstObawW0lKYzVFj",
      title: "中国风",
      style: "中国风",
      desc: "中国风最新上市流行款",
      timeRange: "today"
    },
    {
      id: "4",
      img: "http://test.kuugacoder.top/clothingAcM4PiE5zkzAJ7TsHgp8b",
      title: "中国风",
      style: "中国风",
      desc: "中国风最新上市流行款",
      timeRange: "today"
    },
    {
      id: "5",
      img: "http://test.kuugacoder.top/clothing6hY69gqhcg5rJYZXOOX8v",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    },
    {
      id: "6",
      img: "http://test.kuugacoder.top/FtslQR2B89M44Qyj-xwmFMR01tzF",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    },
    {
      id: "7",
      img: "http://test.kuugacoder.top/cat1.png",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    },
    {
      id: "8",
      img: "http://test.kuugacoder.top/cat.png",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    }, {
      id: "9",
      img: "http://test.kuugacoder.top/img7.jpg",
      title: "中国风",
      desc: "中国风最新上市流行款",
      style: "中国风",
      timeRange: "today"
    }
  ]

  useEffect(() => {
    console.log("初始化发送请求 today");
  }, [])

  let historyData = []
  historyData = useMemo(() => {
    console.log("axios请求历史记录", historyRequest);
    return []
  }, [historyRequest])

  const handleTabChange = (e: number) => {
    const { value } = history.filter(item => {
      return item.index === e
    })[0]
    setHistoryRequest(pre => ({ ...pre, range: value }))
  }

  return <div className={s.tab}>
    <Tabs
      defaultActiveKey="0"
      tabPosition="left"
      onChange={e => handleTabChange(parseInt(e))}
      items={history.map((item, i) => {
        const id = String(i);
        return {
          label: `${item.label}`,
          key: id,
          children: <TabHistoryData
            history={historyDataTemp}
            handlePage={(currentPage, pageSize) => setHistoryRequest(pre => ({ ...pre, currentPage, pageSize }))} />,
        };
      })}
    />
  </div>
}

export default TabHistory
