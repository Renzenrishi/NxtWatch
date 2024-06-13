import './App.css'
import {Component} from 'react'
import Login from './components/Login'

import NxtWatchContext from './context/NxtwatchContext'

class App extends Component {
  state = {
    theme: 'dark',
  }

  render() {
    const {theme} = this.state

    return (
      <NxtWatchContext.Provider value={{theme}}>
        <Login />
      </NxtWatchContext.Provider>
    )
  }
}

export default App
