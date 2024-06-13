import './App.css'
import {Component} from 'react'
import Login from './components/Login'

import NxtWatchContext from './context/NxtwatchContext'

import Header from './components/Header'
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {
    theme: 'light',
    activeOption: 'Home',
  }

  changeTheme = () => {
    const {theme} = this.state

    if (theme === 'dark') {
      this.setState({theme: 'light'})
    } else {
      this.setState({theme: 'dark'})
    }
  }

  getActiveOption = value => {
    this.setState({activeOption: value})
  }

  render() {
    const {theme, activeOption} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          theme,
          activeOption,
          changeTheme: this.changeTheme,
          getActiveOption: this.getActiveOption,
        }}
      >
        <Header />
        <Sidebar />
      </NxtWatchContext.Provider>
    )
  }
}

export default App
