import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Table, Input, Button, message} from 'antd'
import io from './io'

const SignUser = () => {
  const {activityId} = useParams()
  const [phone, setPhone] = useState()
  const [userName, setUserName] = useState()
  const [list, setList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [query, setQuery] = useState(false)

  const [fromSearch, setFromSearch] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await io.getUserList({
          activityId,
          phone,
          userName,
          currentPage,
          pageSize,
        })

        if (fromSearch) {
          setCurrentPage(1)
          setFromSearch(false)
        }
  
        setTotal(res.count)
        setList([...(res.data || [])])
      } catch (e) {
        message.error(e.message)
      }
    }

    fetchData()
  }, [query])

  useEffect(() => {
    setCurrentPage(1)
  }, [pageSize])

  const renderColumn = number => {
    const width = `${(100 / number).toFixed(1)}%`

    return [{
      title: '用户名',
      dataIndex: 'userName',
      width,
    }, {
      title: '性别',
      dataIndex: 'gender',
      width,
      render: value => value === 1 ? '男士' : '女士',
    }, {
      title: '手机',
      dataIndex: 'phone',
      width,
    }, {
      title: '创建时间',
      dataIndex: 'ctime',
      width,
    }]
  }

  return <>
    <div className="p24 bgf">
      <div className="FBH FBJB">
        <h2>签到用户列表</h2>

        <div className="FB1 FBH FBJE">
          <Input className="mr8" style={{width: 200, marginRight: 8}} placeholder="输入手机号" onChange={e => setPhone(e.target.value)} />
          <Input className="mr8" style={{width: 200, marginRight: 8}} placeholder="输入用户名" onChange={e => setUserName(e.target.value)} />
          <Button 
            type="primary" 
            onClick={() => {
              setQuery(!query)
              setFromSearch(true)
            }}
          >搜索</Button>
        </div>
      </div>
      
      <Table 
         columns={renderColumn(8)}
         dataSource={list}
         onChange={(pagination, filters, sorter) => {
           const {
             pageSize,
             current,
             total,
           } = pagination

           setCurrentPage(current)
           setPageSize(pageSize)
           setTotal(total)

           setQuery(!query)
         }}
         pagination={{
           current: currentPage,
           pageSize,
           total,
           showTotal: sum => `共${sum}条`,
           showQuickJumper: true,
           showSizeChanger: true,
         }}
      />
    </div>
  </>
}

export default SignUser
