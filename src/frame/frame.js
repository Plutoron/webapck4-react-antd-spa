import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {ConfigProvider} from 'antd'

import zhCN from 'antd/es/locale/zh_CN'

// 样式
import 'common/flexbox.css'
import 'common/common.styl'
import './frame.styl'

const Frame = ({children}) => {
  return <>
    <ConfigProvider locale={zhCN}>
      <div 
        className="content pt16"
        style={{
          width: '80%',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </ConfigProvider>
  </>
}

export default withRouter(Frame)
