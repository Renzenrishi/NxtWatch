import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './context/NxtwatchContext'

import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'

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
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
