import ioContext from 'common/io-context'

ioContext.create('home', {
  getList: {
    url: 'getList',
    method: 'GET',
  }
})

export default ioContext.api.home
