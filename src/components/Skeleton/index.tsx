import React from 'react';
import { Skeleton } from 'antd';

type Props = {
  active?: boolean
}

const App: React.FC = (props) => {
  const { } = props

  return <>
    <Skeleton
      active
      paragraph={{
        rows: 4
      }}
    >
    </Skeleton>
  </>
};

export default App;