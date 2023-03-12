import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import s from './index.module.less'
import { Pagination } from 'antd';

interface hisToryData {
  id: string,
  img: string,
  style: string,
  title: string,
  desc: string,
  timeRange: string
}

type Props = {
  history: hisToryData[],
  handlePage: (currentPage: number, pageSize: number) => void
}

const TabHistoryData: FC<Props> = (props) => {
  const { history, handlePage } = props
  const [pageSize, setPageSize] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)
  const nav = useNavigate()

  const toDetails = (id: string) => {
    alert(`TabHistoryData Components function toDetails ===> id=${id}`)
    // nav('/detail', {
    //   state: {
    //     id
    //   }
    // })
  }

  useEffect(() => {
    handlePage(currentPage, pageSize)
  }, [currentPage, pageSize])

  const handle = (currentPage: number, pageSize: number) => {
    setPageSize(pageSize)
    setCurrentPage(currentPage)
  }

  return <div>
    <div className={s.data}>
      {
        history.map(item => {
          return <div
            key={item.id}
            className={s.data_item}
            onClick={() => toDetails(item.id)}
          >
            <div className={s.data_item_img}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={s.data_item_info}>
              <div className={s.top}>
                <span className={s.style}>
                  {item.style}
                </span>
                <span className={s.title}>
                  {item.title}
                </span>
              </div>
              <div>{item.desc}</div>
              <div className={s.viewTime}>浏览日期:{item.timeRange}</div>
            </div>
          </div>
        })
      }
    </div>
    <div className={s.page}>
      <Pagination
        defaultCurrent={1}
        hideOnSinglePage={true}
        total={history.length}
        current={currentPage}
        pageSize={pageSize}
        onChange={(page, pageSize) => handle(page, pageSize)}
      />
    </div>
  </div>
}

export default TabHistoryData