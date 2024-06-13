import './App.css'
import {Component} from 'react'
import Login from './components/Login'

import NxtWatchContext from './context/NxtwatchContext'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {
    theme: 'light',
  }

  changeTheme = () => {
    const {theme} = this.state

    if (theme === 'dark') {
      this.setState({theme: 'light'})
    } else {
      this.setState({theme: 'dark'})
    }
  }

  render() {
    const {theme} = this.state

    return (
      <NxtWatchContext.Provider value={{theme, changeTheme: this.changeTheme}}>
        <Header />
        <Sidebar />
      </NxtWatchContext.Provider>
    )
  }
}

export default App
