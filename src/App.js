import './App.css'
import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './context/NxtwatchContext'

import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'

import Gaming from './components/Gaming'

class App extends Component {
  state = {
    theme: 'light',
    activeOption: '',
    likeAndDislikeBtn: '',
    saveBtn: false,
    saveVideosList: [],
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

  changeLikeAndDislikeBtn = value => {
    this.setState({likeAndDislikeBtn: value})
  }

  changeSaveBtn = () => {
    this.setState(prevState => ({saveBtn: !prevState.saveBtn}))
  }

  addVideoToSaveList = videoItem => {
    const {saveVideosList} = this.state

    const findVideoItem = saveVideosList.find(each => each.id === videoItem.id)

    if (findVideoItem === undefined) {
      this.setState(prevState => ({
        saveVideosList: [...prevState.saveVideosList, videoItem],
      }))
    }
  }

  render() {
    const {
      theme,
      activeOption,
      likeAndDislikeBtn,
      saveBtn,
      saveVideosList,
    } = this.state

    console.log(saveVideosList)

    return (
      <NxtWatchContext.Provider
        value={{
          theme,
          activeOption,
          likeAndDislikeBtn,
          saveBtn,
          saveVideosList,
          changeTheme: this.changeTheme,
          getActiveOption: this.getActiveOption,
          changeLikeAndDislikeBtn: this.changeLikeAndDislikeBtn,
          changeSaveBtn: this.changeSaveBtn,
          savedVideosList: [],
          addVideoToSaveList: this.addVideoToSaveList,
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
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />

          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
