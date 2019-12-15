import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

// 公共头部

// 单页面frame层
import Frame from 'src/frame'

import Home from 'pages/home'

const App = () => {
  return (
    <Router>
      <Frame>
        <Switch>
          <Route 
            exact 
            path={`/home`} 
            component={Home}
          />

          <Redirect from={'*'} to={`/home`} />
        </Switch>
      </Frame>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
