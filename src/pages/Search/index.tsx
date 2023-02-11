import React from "react";
import CategorySearch from "../../components/CategorySearch";
import Header from "../../components/Header";
import s from './index.module.less'

const Search: React.FC = () => {
  return <div>
    <Header/>
    <div className={s.search}>
        <CategorySearch/>
    </div>
  </div>
}

export default Search